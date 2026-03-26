import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MySchoolOverview from '../../../../../screens/MySchool/MySchoolOverview';
import MySchoolTeams from '../../../../../screens/MySchool/MySchoolTeams';
import MySchoolAllPlayer from '../../../../../screens/MySchool/MySchoolAllPlayer';
import TournamentTeams from '../../../../../screens/MySchool/TournamentTeams';
import TournamentMatches from '../../../../../screens/MySchool/TournamentMatches';
import TournamentScores from '../../../../../screens/MySchool/TournamentScores';
import {
  MatchesIcon,
  ScoreIcon,
  TournamentTeamIcon,
  MySchoolAllPlayerIcon,
  MySchoolTeamsIcon,
  SchoolIcon,
} from './TabBarIcon';
import { useI18n } from '../../../../../shared/lib/i18n/I18nProvider';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const { t } = useI18n();

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
        tabBarActiveTintColor: '#00c951',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="MySchoolOverview"
        component={MySchoolOverview}
        options={{
          title: t('School'),
          tabBarIcon: SchoolIcon,
        }}
      />

      <Tab.Screen
        name="MySchoolTeams"
        component={MySchoolTeams}
        options={{
          title: t('Teams'),
          tabBarIcon: MySchoolTeamsIcon,
        }}
      />

      <Tab.Screen
        name="MySchoolAllPlayer"
        component={MySchoolAllPlayer}
        options={{
          title: t('Players'),
          tabBarIcon: MySchoolAllPlayerIcon,
        }}
      />

      <Tab.Screen
        name="TournamentTeams"
        component={TournamentTeams}
        options={{
          title: t('TournamentTeam'),
          tabBarIcon: TournamentTeamIcon,
        }}
      />

      <Tab.Screen
        name="TournamentMatches"
        component={TournamentMatches}
        options={{
          title: t('Matches'),
          tabBarIcon: MatchesIcon,
        }}
      />

      <Tab.Screen
        name="TournamentScores"
        component={TournamentScores}
        options={{
          title: t('Scores'),
          tabBarIcon: ScoreIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
