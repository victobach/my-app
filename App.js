import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import { createStackNavigator } from "@react-navigation/stack";
import Premium from "./components/Premium";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import MyFavorites from "./components/stackComponentsProfile/MyFavorites";

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
          <Tab.Screen name="Favorites" component={MyFavorites} />
          <Tab.Screen name="Premium" component={Premium} />
          <Tab.Screen name="Profile" component={StackNavigatorProfile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
