import * as React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import SettingsScreen from "./components/SettingsScreen";
import Premium from "./components/Premium";
import ClubOwner from "./components/ClubOwner";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import Venues from "./components/stackComponentsVenues/Venues";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Venues Map" component={StackNavigatorVenues} />

        <Tab.Screen name="Profile" component={StackNavigatorProfile} />

        <Tab.Screen name="Premium" component={Premium} />

            <Tab.Screen name="ClubOwner" component={ClubOwner} />

        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
