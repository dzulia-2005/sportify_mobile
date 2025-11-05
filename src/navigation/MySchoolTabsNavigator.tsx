import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MySchoolOverview from "../screens/MySchool/MySchoolOverview";
import MySchoolTeams from "../screens/MySchool/MySchoolTeams";
import MySchoolAllPlayer from "../screens/MySchool/MySchoolAllPlayer";
import TournamentTeams from "../screens/MySchool/TournamentTeams";
import TournamentMatches from "../screens/MySchool/TournamentMatches";
import TournamentScores from "../screens/MySchool/TournamentScores";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b1b33",
          borderTopColor: "#1a2b4c",
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#00c951",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      {/* სკოლის მიმოხილვა */}
      <Tab.Screen
        name="MySchoolOverview"
        component={MySchoolOverview}
        options={{
          title: "სკოლა",
          tabBarIcon: ({ color, size }) => (
            <Icon name="school-outline" color={color} size={size} />
          ),
        }}
      />

      {/* სკოლის გუნდები */}
      <Tab.Screen
        name="MySchoolTeams"
        component={MySchoolTeams}
        options={{
          title: "გუნდები",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-group-outline" color={color} size={size} />
          ),
        }}
      />

      {/* სკოლის ყველა მოთამაშე */}
      <Tab.Screen
        name="MySchoolAllPlayer"
        component={MySchoolAllPlayer}
        options={{
          title: "მოთამაშეები",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-star-outline" color={color} size={size} />
          ),
        }}
      />

      {/* ტურნირის გუნდები */}
      <Tab.Screen
        name="TournamentTeams"
        component={TournamentTeams}
        options={{
          title: "ტურნირის გუნდები",
          tabBarIcon: ({ color, size }) => (
            <Icon name="trophy-outline" color={color} size={size} />
          ),
        }}
      />

      {/* ტურნირის მატჩები */}
      <Tab.Screen
        name="TournamentMatches"
        component={TournamentMatches}
        options={{
          title: "მატჩები",
          tabBarIcon: ({ color, size }) => (
            <Icon name="soccer-field" color={color} size={size} />
          ),
        }}
      />

      {/* ტურნირის ქულები */}
      <Tab.Screen
        name="TournamentScores"
        component={TournamentScores}
        options={{
          title: "ქულები",
          tabBarIcon: ({ color, size }) => (
            <Icon name="scoreboard-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
