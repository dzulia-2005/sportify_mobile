import { NavigatorScreenParams } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import TournamentTabsNavigator from '../../../tabs/tournament/tournamentTabsNavigator/TournamentTabsNavigator'
import { TournamentTabNavigatorType } from '../../../tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type'


export type TournamentStackParamList = {
  TournamentTabs: NavigatorScreenParams<TournamentTabNavigatorType> & {
    tournamentId: string;
  };
};

const Stack = createStackNavigator<TournamentStackParamList>()

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
