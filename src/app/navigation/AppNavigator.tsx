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

const Drawer = createDrawerNavigator<DrawerNavigationType>();

const AppNavigator = () => {
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
