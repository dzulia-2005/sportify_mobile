import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { MatchesIcon, overViewIcon ,playerIcon,ScoresIcon,StatIcon,teamIcon} from './TabBarIcon';
import OverViewScreen from "../../../../../screens/tournament/overView/index";
import playerScreen from "../../../../../screens/tournament/players/index";
import teamsScreen from "../../../../../screens/tournament/teams/index";
import statScreen from "../../../../../screens/tournament/stats/index";
import matchesScreen from "../../../../../screens/tournament/matches/index";
import scoresScreen from "../../../../../screens/tournament/scores/index";
import { TournamentTabNavigatorType } from './tournamenTabNavigator.type';

const Tab = createBottomTabNavigator<TournamentTabNavigatorType>();

const TournamentTabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle:{
                backgroundColor: '#0b1b33',
                borderTopColor: '#1a2b4c',
                height: 70,
                paddingBottom: 10,
            },
            tabBarActiveTintColor: '#00c951',
            tabBarInactiveTintColor: '#999',
            tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: '600',
            },
        }}
    >
        <Tab.Screen
            name='overView'
            component={OverViewScreen}
            options={{
                title:'overview',
                tabBarIcon:overViewIcon
            }}
        />

        <Tab.Screen
            name='teams'
            component={teamsScreen}
            options={{
                title:'teams',
                tabBarIcon:teamIcon
            }}
        />

        <Tab.Screen
            name='player'
            component={playerScreen}
            options={{
                title:'player',
                tabBarIcon:playerIcon
            }}
        />

        <Tab.Screen
            name='stats'
            component={statScreen}
            options={{
                title:'stats',
                tabBarIcon:StatIcon
            }}
        />

        <Tab.Screen
            name='matches'
            component={matchesScreen}
            options={{
                title:'matches',
                tabBarIcon:MatchesIcon
            }}
        />

        <Tab.Screen
            name='scores'
            component={scoresScreen}
            options={{
                title:'scores',
                tabBarIcon:ScoresIcon
            }}
        />
    </Tab.Navigator>
  )
}

export default TournamentTabsNavigator