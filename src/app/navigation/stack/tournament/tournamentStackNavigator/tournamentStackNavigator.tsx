import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TournamentTabsNavigator from '../../../tabs/tournament/tournamentTabsNavigator/TournamentTabsNavigator'

const Stack = createStackNavigator()

const TournamentStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{backgroundColor:'#0b1b33'},
            headerTintColor:'',
            headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
        }}
    >
        <Stack.Screen
            name='TournamentTabs'
            component={TournamentTabsNavigator}
            options={{headerShown:false}}
        />


    </Stack.Navigator>
  )
}

export default TournamentStackNavigator