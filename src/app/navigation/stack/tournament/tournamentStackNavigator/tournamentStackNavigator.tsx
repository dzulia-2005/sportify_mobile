import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TournamentTabsNavigator from '../../../tabs/tournament/tournamentTabsNavigator/TournamentTabsNavigator';
import TeamDetailScreen from '../../../../../screens/tournament/teamDetailScreen';
import { TournamentStackParamList } from '../../../drawer/drawerNavigator.type';

const Stack = createStackNavigator<TournamentStackParamList>();

const TournamentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0b1b33' },
        headerTintColor: '',
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="TournamentTabs"
        component={TournamentTabsNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TeamDetailScreen"
        component={TeamDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TournamentStackNavigator;
