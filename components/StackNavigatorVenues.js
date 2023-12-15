// Importing necessary components from React Navigation and React Native
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Importing custom components for stack navigation
import VenueMap from "./stackComponentsVenues/VenueMap";
import Filter from "./stackComponentsVenues/Filter";
import VenueList from "./venueListComponents/VenueList";
import VenueDetails from "./venueListComponents/VenueDetails";
import Book from "./venueListComponents/Book";
import FilterOptions from "./stackComponentsVenues/FilterOptions";

// Creating a stack navigator
const Stack = createStackNavigator();

// Function to define the stack navigator for Venues
function StackNavigatorVenues() {
  return (
    // Stack.Navigator to manage the stack of screens
    <Stack.Navigator initialRouteName="VenueList">
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen name="VenueList" component={VenueList} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
      <Stack.Screen name="Venue Map" component={VenueMap} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="FilterOptions" component={FilterOptions} />
    </Stack.Navigator>
  );
}

// Exporting the StackNavigatorVenues component
export default StackNavigatorVenues;
