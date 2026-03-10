import React from 'react';
import HomePage from '../../screens/dashboard/home/index';
import MatchesPage from '../../screens/auth/login/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from '../../screens/auth/register/index';
import MyAccount from '../../screens/dashboard/myAccount/index';
import CustomDrawerContent from './drawer/customDrawerContent';
import ForgotPassword from '../../screens/auth/forgotPassword';
import MySchoolStackNavigator from './stack/mySchool/mySchoolStackNavigator/mySchoolStackNavigator';
import { DrawerNavigationType } from './drawer/drawerNavigator.type';
import { useAuth } from '../../shared/hooks/useAuth';
import TournamentStackNavigator from './stack/tournament/tournamentStackNavigator/tournamentStackNavigator';


const Drawer = createDrawerNavigator<DrawerNavigationType>();

const AppNavigator = () => {
  const { accessToken } = useAuth();
  return (

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
                title: 'My Account',
              }}
            />

            <Drawer.Screen
              name="MySchool"
              component={MySchoolStackNavigator}
              options={{
                title: 'My School',
              }}
            />

            <Drawer.Screen
              name='Tournament'
              component={TournamentStackNavigator}
              options={{
                title:"Tournaments"
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
                title: '',
                drawerItemStyle:{display:'none'}
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
          </>
        )}
      </Drawer.Navigator>
  );
};

export default AppNavigator;
