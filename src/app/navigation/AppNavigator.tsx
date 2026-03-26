import React from 'react';
import HomePage from '../../screens/dashboard/home/index';
import LoginPage from '../../screens/Auth/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from '../../screens/Auth/Register';
import MyAccount from '../../screens/dashboard/myAccount/index';
import CustomDrawerContent from './drawer/customDrawerContent';
import ForgotPassword from '../../screens/Auth/forgotPassword';
import MySchoolStackNavigator from './stack/mySchool/mySchoolStackNavigator/mySchoolStackNavigator';
import { DrawerNavigationType } from './drawer/drawerNavigator.type';
import { useAuth } from '../../shared/hooks/useAuth';
import TournamentStackNavigator from './stack/tournament/tournamentStackNavigator/tournamentStackNavigator';
import MyTournament from '../../screens/dashboard/myTournaments/index';
import AboutUs from '../../screens/dashboard/aboutUs/index';
import Pricing from '../../screens/dashboard/pricing/index';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useI18n } from '../../shared/lib/i18n/I18nProvider';

const Drawer = createDrawerNavigator<DrawerNavigationType>();

const AppNavigator = () => {
  const { accessToken } = useAuth();
  const navigation = useNavigation();
  const { t } = useI18n();
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
              title: t('Home'),
              headerShown: false,
              drawerIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              title: t('My Account'),
              drawerIcon: ({ color, size }) => (
                <Icon name="account" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Pricing"
            component={Pricing}
            options={{
              title: t('Pricing'),
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginLeft: 15 }}
                >
                  <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
              ),
              drawerIcon: ({ color, size }) => (
                <Icon name="cash" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="MySchool"
            component={MySchoolStackNavigator}
            options={{
              title: t('My School'),
              drawerIcon: ({ color, size }) => (
                <Icon name="school" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="MyTournaments"
            component={MyTournament}
            options={{
              title: t('My Tournaments'),
              drawerIcon: ({ color, size }) => (
                <Icon name="trophy" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Tournament"
            component={TournamentStackNavigator}
            options={{
              title: t('Tournaments'),
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Home"
            component={HomePage}
            options={{
              title: t('Home'),
              headerShown: false,
              drawerIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="AboutUs"
            component={AboutUs}
            options={{
              title: t('About us'),
              headerStyle: {
                backgroundColor: '#020617',
              },
              drawerIcon: ({ color, size }) => (
                <Icon name="information-outline" size={size} color={color} />
              ),
            }}
          />

          <Drawer.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: t('Login'),
              drawerIcon: ({ color, size }) => (
                <Icon name="login" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Register"
            component={RegisterPage}
            options={{
              title: '',
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={{
              title: '',
              drawerItemStyle: { display: 'none' },
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
