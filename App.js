// Importing React and necessary components from React Navigation and React Native
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom stack navigator components
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import StackNavigatorPremium from "./components/StackNavigatorPremium";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import StackNavigatorFavorites from "./components/StackNavigatorFavorites";

// Importing View and StyleSheet components from React Native
import { View, StyleSheet } from "react-native";

// Creating a bottom tab navigator
const Tab = createBottomTabNavigator();

// Creating styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0000", // Setting the background color to red
  },
});

// Main App component
export default function App() {
  // Return the app structure
  return (
    <View style={styles.container}>
      {/* NavigationContainer to manage navigation state */}
      <NavigationContainer>
        {/* Bottom Tab Navigator for main app navigation */}
        <Tab.Navigator>
          {/* Each Tab.Screen corresponds to a different screen in the app */}
          <Tab.Screen name="Venues" component={StackNavigatorVenues} />
          <Tab.Screen name="Favorites" component={StackNavigatorFavorites} />
          <Tab.Screen name="Premium" component={StackNavigatorPremium} />
          <Tab.Screen name="Profile" component={StackNavigatorProfile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
