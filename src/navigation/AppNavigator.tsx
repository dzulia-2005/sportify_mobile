import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../screens/Home/index';
import MatchesPage from '../screens/Matches/index';

type RootStackParamList = {
    Home:undefined;
    Matches:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
              name='Home' 
              component={HomePage}
              options={{headerShown:false}}
            />
            <Stack.Screen 
              name='Matches' 
              component={MatchesPage}
              options={{
                headerShown:true,
                headerTitle:"",
                headerTransparent:true,
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator