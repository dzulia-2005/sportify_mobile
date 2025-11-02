import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomePage from '../screens/Home/index';
import MatchesPage from '../screens/Matches/index';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition:'right',
            headerStyle:{backgroundColor:'#0b1b33'},
            headerShown:true,
            headerTintColor: '#00c951',
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
            name='Matches' 
            component={MatchesPage} 
            options={{title:'მატჩები'}}
          />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator