import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./components/SettingsScreen";
import Premium from "./components/Premium";
import ClubOwner from "./components/ClubOwner";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import Venues from "./components/stackComponentsVenues/Venues";
import ArrayListComponent from "./components/venueListComponents/ArrayListComponent";
import VenueDetails from "./components/venueListComponents/VenueDetails";
import { VenueList } from "./BarLists";
import { Area } from "./BarLists";
import { GetUserURL } from "./BarLists";
import StackNavigatorSettings from "./components/StackNavigatorSettings";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import UserLogin from "./components/UserLogin";

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
          <Tab.Screen name="My Profile" component={StackNavigatorProfile} />
          <Tab.Screen name="Premium" component={Premium} />
          <Tab.Screen name="ClubOwner" component={ClubOwner} />
          <Tab.Screen name="Settings" component={StackNavigatorSettings} />
          <Tab.Screen name="UserLogin" component={UserLogin} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
