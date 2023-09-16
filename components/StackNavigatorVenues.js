import { createStackNavigator } from "@react-navigation/stack";
import AllVenues from "./stackComponentsVenues/AllVenues";
import Venues from "./stackComponentsVenues/Venues";
import Filter from "./stackComponentsVenues/Filter";

const Stack = createStackNavigator();

function StackNavigatorVenues() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Venues" component={AllVenues} />
      <Stack.Screen name="Venues" component={Venues} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
}
export default StackNavigatorVenues;
