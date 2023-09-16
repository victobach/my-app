import * as React from "react";

import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigator from "./components/StackNavigator";

import HomeScreen from "./components/HomeScreen";

import SettingsScreen from "./components/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hjem" component={HomeScreen} />

        <Tab.Screen name="Indstillinger" component={SettingsScreen} />

        <Tab.Screen name="Detaljer" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
