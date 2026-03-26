import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  MatchesIcon,
  overViewIcon,
  playerIcon,
  ScoresIcon,
  StatIcon,
  teamIcon,
} from './TabBarIcon';
import OverViewScreen from '../../../../../screens/tournament/overView/index';
import PlayerScreen from '../../../../../screens/tournament/players/index';
import TeamsScreen from '../../../../../screens/tournament/teams/index';
import StatScreen from '../../../../../screens/tournament/stats/index';
import MatchesScreen from '../../../../../screens/tournament/matches/index';
import ScoresScreen from '../../../../../screens/tournament/scores/index';
import {
  TournamentTabNavigatorType,
  TournamentTabsRouteProp,
} from './tournamenTabNavigator.type';
import { useRoute } from '@react-navigation/native';
import { useI18n } from '../../../../../shared/lib/i18n/I18nProvider';

const Tab = createBottomTabNavigator<TournamentTabNavigatorType>();

const TournamentTabsNavigator = () => {
  const route = useRoute<TournamentTabsRouteProp>();
  const { t } = useI18n();
  const tournamentId =
    route.params?.tournamentId ?? route.params?.params?.tournamentId;

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
        name="overView"
        initialParams={{ tournamentId }}
        component={OverViewScreen}
        options={{
          title: t('overview'),
          tabBarIcon: overViewIcon,
        }}
      />

      <Tab.Screen
        name="teams"
        initialParams={{ tournamentId }}
        component={TeamsScreen}
        options={{
          title: t('teams'),
          tabBarIcon: teamIcon,
        }}
      />

      <Tab.Screen
        name="player"
        initialParams={{ tournamentId }}
        component={PlayerScreen}
        options={{
          title: t('player'),
          tabBarIcon: playerIcon,
        }}
      />

      <Tab.Screen
        name="stats"
        initialParams={{ tournamentId }}
        component={StatScreen}
        options={{
          title: t('stats'),
          tabBarIcon: StatIcon,
        }}
      />

      <Tab.Screen
        name="matches"
        initialParams={{ tournamentId }}
        component={MatchesScreen}
        options={{
          title: t('matches'),
          tabBarIcon: MatchesIcon,
        }}
      />

      <Tab.Screen
        name="scores"
        initialParams={{ tournamentId }}
        component={ScoresScreen}
        options={{
          title: t('scores'),
          tabBarIcon: ScoresIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TournamentTabsNavigator;
