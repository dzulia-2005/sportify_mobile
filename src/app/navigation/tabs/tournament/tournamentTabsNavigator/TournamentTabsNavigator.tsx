import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { overViewIcon ,playerIcon,teamIcon} from './TabBarIcon';
import OverViewScreen from "../../../../../screens/tournament/overView/index";
import playerScreen from "../../../../../screens/tournament/players/index";
import teamsScreen from "../../../../../screens/tournament/teams/index";

const Tab = createBottomTabNavigator();

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
            name='player'
            component={playerScreen}
            options={{
                title:'player',
                tabBarIcon:playerIcon
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
    </Tab.Navigator>
  )
}

export default TournamentTabsNavigator