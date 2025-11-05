import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomePage from '../screens/Home/index';
import MatchesPage from '../screens/Login/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegisterPage from '../screens/Register/index';
import MyAccount from '../screens/MyAccount/index';
import CustomDrawerContent from './CustomDrawerContent';
import MyTournaments from '../screens/MyTournaments/index';
import MySchoolTabsNavigator from './MySchoolTabsNavigator';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerPosition:'right',
            headerStyle:{backgroundColor:'#0b1b33'},
            headerShown:true,
            headerTintColor: '#fff',
            headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          }}
        >
          <Drawer.Screen 
            name='Home' 
            component={HomePage} 
            options={{
              title:'მთავარი',
              headerShown:false
            }}/>
          <Drawer.Screen 
            name='Login' 
            component={MatchesPage} 
            options={{
              title:'შესვლა'
            }}
          />
          <Drawer.Screen
            name='Register'
            component={RegisterPage}
            options={{
              title:'რეგისტრაცია'
            }}
          />

          <Drawer.Screen
            name='MyAccount'
            component={MyAccount}
            options={{
              title:'ჩემი ანგარიში'
            }}
          />
          
            <Drawer.Screen
              name='MyTournaments'
              component={MyTournaments}
              options={{
                title:'ჩემი ტურნირები'
              }}
            />

            <Drawer.Screen
              name='MySchool'
              component={MySchoolTabsNavigator}
              options={{
                title:'ჩემი სკოლა'
              }}
            />

        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator