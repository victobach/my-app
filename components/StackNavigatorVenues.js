import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import VenueMap from "./stackComponentsVenues/VenueMap";
import Filter from "./stackComponentsVenues/Filter";
import VenueList from "./venueListComponents/VenueList";
import VenueDetails from "./venueListComponents/VenueDetails";
import Book from "./venueListComponents/Book";
import FilterOptions from "./stackComponentsVenues/FilterOptions";

const Stack = createStackNavigator();

function StackNavigatorVenues() {
  return (
    <Stack.Navigator initialRouteName="VenueList">
      <Stack.Screen name="VenueList" component={VenueList} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
      <Stack.Screen name="Venue Map" component={VenueMap} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="FilterOptions" component={FilterOptions} />
    </Stack.Navigator>
  );
}
export default StackNavigatorVenues;
