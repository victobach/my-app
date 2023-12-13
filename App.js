import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigatorPremium from "./components/StackNavigatorPremium";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import StackNavigatorFavorites from "./components/StackNavigatorFavorites";

import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FF0000",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Venues" component={StackNavigatorVenues} />
          <Tab.Screen name="Favorites" component={StackNavigatorFavorites} />
          <Tab.Screen name="Premium" component={StackNavigatorPremium} />
          <Tab.Screen name="Profile" component={StackNavigatorProfile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
