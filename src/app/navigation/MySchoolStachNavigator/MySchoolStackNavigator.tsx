import React from 'react';
import MySchoolTabsNavigator from '../MySchoolTabsNavigator/MySchoolTabsNavigator';
import MySchoolTeamDetail from '../../../screens/MySchool/MySchoolTeamDetailScreen/index';
import MySchoolPlayer from '../../../screens/MySchool/MySchoolPlayerDetailScreen/index';
import { createStackNavigator } from '@react-navigation/stack';
import { ArrowLeft } from './MySchoolStackNavigatorIcons';

const Stack = createStackNavigator();

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
        options={({ navigation }) => ({
          headerTitle: '',
          headerTitleAlign: 'center',
          headerLeft: () => <ArrowLeft onPress={() => navigation.goBack()} />,
        })}
      />

      <Stack.Screen
        name="MySchoolPlayerDetailTeam"
        component={MySchoolPlayer}
        options={({ navigation }) => ({
          headerTitle: '',
          headerLeft: () => <ArrowLeft onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default MySchoolStackNavigator;
