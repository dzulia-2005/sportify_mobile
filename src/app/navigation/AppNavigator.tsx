import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomePage from '../../screens/home/index';
import MatchesPage from '../../screens/auth/login/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from '../../screens/auth/register/index';
import MyAccount from '../../screens/myAccount/index';
import CustomDrawerContent from './customDrawerContent';
import ForgotPassword from '../../screens/auth/forgotPassword';
import MySchoolStackNavigator from './mySchoolStackNavigator/mySchoolStackNavigator';
import { DrawerNavigationType } from './drawerNavigator.type';
import { useAuth } from '../../shared/hooks/useAuth';
import ResetPassword from '../../screens/auth/resetPassword';


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
              name="forgotPassword"
              component={ForgotPassword}
              options={{
                title:"",
                drawerItemStyle:{display:'none'}
              }}
            />
            <Drawer.Screen
              name="resetPassword"
              component={ResetPassword}
              options={{
                title:"",
                drawerItemStyle:{display:'none'}
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
