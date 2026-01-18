import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomePage from '../../screens/Home/index';
import MatchesPage from '../../screens/Auth/Login/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from '../../screens/Auth/Register/index';
import MyAccount from '../../screens/MyAccount/index';
import CustomDrawerContent from './CustomDrawerContent';
import MySchoolStackNavigator from './MySchoolStackNavigator/MySchoolStackNavigator';
import { DrawerNavigationType } from './DrawerNavigator.type';
import { useAuth } from '../../shared/hooks/useAuth';
import ChangePasswordScreen from '../../screens/Auth/ChangePassword/index';
import BackButton from '../../shared/components/backButton';

const Drawer = createDrawerNavigator<DrawerNavigationType>();

const AppNavigator = () => {
  const { accessToken } = useAuth();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: 'right',
          headerStyle: { backgroundColor: '#0b1b33' },
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
        }}
      >
        {accessToken ? (
          <>
            <Drawer.Screen
              name="Home"
              component={HomePage}
              options={{
                title: 'Home',
                headerShown: false,
              }}
            />
            <Drawer.Screen
              name="MyAccount"
              component={MyAccount}
              options={{
                title: 'MyAccount',
              }}
            />

            <Drawer.Screen
              name="MySchool"
              component={MySchoolStackNavigator}
              options={{
                title: 'My School',
              }}
            />
          </>
        ) : (
          <>
            <Drawer.Screen
              name="Home"
              component={HomePage}
              options={{
                title: 'Home',
                headerShown: false,
              }}
            />

            <Drawer.Screen
              name="Login"
              component={MatchesPage}
              options={{
                title: 'Login',
              }}
            />
            <Drawer.Screen
              name="Register"
              component={RegisterPage}
              options={{
                title: 'Register',
              }}
            />
            <Drawer.Screen
              name="ChangePasswordScreen"
              component={ChangePasswordScreen}
              options={({ navigation }) => ({
                headerTitle: '',
                drawerItemStyle: {
                  display: 'none',
                },
                headerLeft: () => <BackButton navigation={navigation} />,
              })}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
