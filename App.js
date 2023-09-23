import * as React from "react";
import { Text, View, StyleSheet } from "react-native"; // Import StyleSheet
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import SettingsScreen from "./components/SettingsScreen";
import Premium from "./components/Premium";
import ClubOwner from "./components/ClubOwner";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import Venues from "./components/stackComponentsVenues/Venues";
import ArrayListComponent from "./components/venueListComponents/ArrayListComponent";
import FetchListComponent from "./components/venueListComponents/FetchListComponent";
import FlatListComponent from "./components/venueListComponents/FlatListComponent";
import { VenueList } from "./BarLists";
import { Area } from "./BarLists";
import { GetUserURL } from "./BarLists";

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
          <Tab.Screen name="Venue list" component={ArrayListComponent} />
          <Tab.Screen name="Venues Map" component={StackNavigatorVenues} />
          <Tab.Screen name="My Profile" component={StackNavigatorProfile} />
          <Tab.Screen name="Premium" component={Premium} />
          <Tab.Screen name="ClubOwner" component={ClubOwner} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
