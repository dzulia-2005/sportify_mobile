import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../screens/Home/HomePage';
import MatchesPage from '../screens/Matches/MatchesPage';

type RootStackParamList = {
    Home:undefined;
    Matches:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomePage}/>
            <Stack.Screen name='Matches' component={MatchesPage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator