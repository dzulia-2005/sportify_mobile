import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MySchoolOverview from '../screens/MySchool/MySchoolOverview/index';
import MySchoolTeams from '../screens/MySchool/MySchoolTeams/index';
import MySchoolAllPlayer from '../screens/MySchool/MySchoolAllPlayer/index';
import TournamentTeams from '../screens/MySchool/TournamentTeams/index';
import TournamentMatches from '../screens/MySchool/TournamentMatches/index';
import TournamentScores from '../screens/MySchool/TournamentScores';

const Tab = createBottomTabNavigator();


const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0b1b33',
          borderTopColor: '#1a2b4c',
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#ff5da2',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen name="MySchoolOverview" component={MySchoolOverview} options={{ title: 'overView' }} />
      <Tab.Screen name="MySchoolTeams" component={MySchoolTeams} options={{ title: 'SchoolTeams' }}/>
      <Tab.Screen name='MySchoolAllPlayer' component={MySchoolAllPlayer} options={{ title: 'SchoolPlayers' }}/>
      <Tab.Screen name='TournamentTeams' component={TournamentTeams} options={{ title: 'TournamentTeams' }}/>
      <Tab.Screen name='TournamentMatches' component={TournamentMatches} options={{ title: 'TournamentMatches' }}/>
      <Tab.Screen name='TournamentScores' component={TournamentScores} options={{ title: 'TournamentScores' }}/>

    </Tab.Navigator>
  );
};

export default TabsNavigator;
