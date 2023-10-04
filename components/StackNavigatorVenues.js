import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Venues from "./stackComponentsVenues/Venues";
import Filter from "./stackComponentsVenues/Filter";
import VenueList from "./venueListComponents/VenueList";
import VenueDetails from "./venueListComponents/VenueDetails";
import Book from "./venueListComponents/Book";

const Stack = createStackNavigator();

function StackNavigatorVenues() {
  return (
    <Stack.Navigator initialRouteName="VenueList">
      <Stack.Screen name="VenueList" component={VenueList} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
      <Stack.Screen name="Venues" component={Venues} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}
export default StackNavigatorVenues;
