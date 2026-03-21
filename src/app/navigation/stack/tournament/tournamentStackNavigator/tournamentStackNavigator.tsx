import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TournamentTabsNavigator from '../../../tabs/tournament/tournamentTabsNavigator/TournamentTabsNavigator';
import TeamDetailScreen from '../../../../../screens/tournament/teamDetailScreen';
import PlayerDetailScreen from '../../../../../screens/tournament/playerDetailScreen/index';
import { TournamentStackParamList } from '../../../drawer/drawerNavigator.type';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator<TournamentStackParamList>();

const TournamentStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0b1b33',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
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
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowContainer}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>←</Text>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="PlayerDetailScreen"
        component={PlayerDetailScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: '',
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.arrowContainer}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>←</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default TournamentStackNavigator;

const styles = StyleSheet.create({
  arrowContainer: {
    marginLeft: 16,
    marginTop: -80,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
});
