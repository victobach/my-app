import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorVenues from "./components/StackNavigatorVenues";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./components/SettingsScreen";
import Premium from "./components/Premium";
import StackNavigatorProfile from "./components/StackNavigatorProfile";
import VenueMap from "./components/stackComponentsVenues/VenueMap";
import VenueList from "./components/venueListComponents/VenueList";
import VenueDetails from "./components/venueListComponents/VenueDetails";
import StackNavigatorSettings from "./components/StackNavigatorSettings";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import UserLogin from "./components/UserLogin";
import MyFavorites from "./components/stackComponentsProfile/MyFavorites";
import SignUpScreen from "./components/SignUp";
import Different from "./components/ModifyUserData";
import ThisIsDifferent from "./components/ModifyUserData";
import LoginScreen from "./components/ModifyUserData";
import CreateVenueScreen from "./components/PartnerSignUp";

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
          <Tab.Screen name="UserLogin" component={UserLogin} />
          <Tab.Screen name="SignUp" component={SignUpScreen} />
          <Tab.Screen name="ModifyUserData" component={LoginScreen} />
          <Tab.Screen name="PatnerSignUp" component={CreateVenueScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
