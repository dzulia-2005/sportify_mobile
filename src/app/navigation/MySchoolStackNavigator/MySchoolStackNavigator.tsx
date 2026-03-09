import React from 'react';
import MySchoolTabsNavigator from '../mySchoolTabsNavigator/MySchoolTabsNavigator';
import MySchoolTeamDetail from '../../../screens/mySchool/mySchoolTeamDetailScreen/index';
import MySchoolPlayer from '../../../screens/mySchool/mySchoolPlayerDetailScreen/index';
import MySchoolTournamentTeamsDetailScreen from '../../../screens/mySchool/tournamentTeamsDetailScreen/index';
import MySchoolTournamentMatches from '../../../screens/mySchool/mySchoolTournamentMatches/index';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HeaderLeft,
  MySchoolStackParamList,
} from './mySchoolStackNavigator.types';
import MySchoolTournamentScores from '../../../screens/mySchool/mySchoolTournamentScores';

const Stack = createStackNavigator<MySchoolStackParamList>();

const MySchoolStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0b1b33' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="MySchoolTabs"
        component={MySchoolTabsNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MySchoolTeamDetailScreen"
        component={MySchoolTeamDetail}
        options={() => ({
          headerTitle: '',
          headerTitleAlign: 'center',
          headerLeft: HeaderLeft,
        })}
      />

      <Stack.Screen
        name="MySchoolPlayerDetailTeam"
        component={MySchoolPlayer}
        options={() => ({
          headerTitle: '',
          headerLeft: HeaderLeft,
        })}
      />

      <Stack.Screen
        name="MySchoolTeamsDetailScreen"
        component={MySchoolTournamentTeamsDetailScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: HeaderLeft,
        })}
      />

      <Stack.Screen
        name="MySchoolTournamentMatches"
        component={MySchoolTournamentMatches}
        options={() => ({
          headerTitle: '',
          headerLeft: HeaderLeft,
        })}
      />

      <Stack.Screen
        name="MySchoolTournamentScores"
        component={MySchoolTournamentScores}
        options={() => ({
          headerTitle: '',
          headerLeft: HeaderLeft,
        })}
      />

    </Stack.Navigator>
  );
};

export default MySchoolStackNavigator;
