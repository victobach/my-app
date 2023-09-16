import * as React from "react";

import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigatorVenues from "./components/StackNavigatorVenues";

import Venues from "./components/stackComponentsVenues/Venues";

import SettingsScreen from "./components/SettingsScreen";
import DetailsScreen from "./components/DetailsScreen";
import Profile from "./components/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Venues Map" component={StackNavigatorVenues} />

        <Tab.Screen name="Profile" component={Profile} />

        <Tab.Screen name="Detaljer" component={DetailsScreen} />

        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
