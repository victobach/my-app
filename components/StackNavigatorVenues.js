import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import AllVenues from "./stackComponentsVenues/AllVenues";
import Venues from "./stackComponentsVenues/Venues";
import Filter from "./stackComponentsVenues/Filter";
import ArrayListComponent from "./venueListComponents/ArrayListComponent";
import VenueDetails from "./venueListComponents/VenueDetails";

const Stack = createStackNavigator();

function StackNavigatorVenues() {
  return (
    <Stack.Navigator initialRouteName="VenueList">
      <Stack.Screen name="VenueList" component={ArrayListComponent} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
      <Stack.Screen name="All Venues" component={AllVenues} />
      <Stack.Screen name="Venues" component={Venues} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}
export default StackNavigatorVenues;
