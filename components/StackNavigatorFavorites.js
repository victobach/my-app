import { createStackNavigator } from "@react-navigation/stack";
import MyFavorites from "./stackComponentsProfile/MyFavorites";
import StackNavigatorLogin from "./StackNavigatorLogin";
import VenueDetails from "./venueListComponents/VenueDetails";

const Stack = createStackNavigator();

function StackNavigatorFavorites() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={MyFavorites} />
      <Stack.Screen name="LoginNavigator" component={StackNavigatorLogin} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
    </Stack.Navigator>
  );
}
export default StackNavigatorFavorites;
