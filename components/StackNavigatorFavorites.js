// Importing necessary components from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom components for the stack navigation
import MyFavorites from "./stackComponentsProfile/MyFavorites";
import StackNavigatorLogin from "./StackNavigatorLogin";
import VenueDetails from "./venueListComponents/VenueDetails";

// Stack Navigator
const Stack = createStackNavigator();

// Function to define the stack navigator for Favorites
function StackNavigatorFavorites() {
  return (
    // Stack.Navigator to manage the stack of screens
    <Stack.Navigator>
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen name="Favorites" component={MyFavorites} />
      <Stack.Screen name="LoginNavigator" component={StackNavigatorLogin} />
      <Stack.Screen name="VenueDetails" component={VenueDetails} />
    </Stack.Navigator>
  );
}

// Exporting the StackNavigatorFavorites component
export default StackNavigatorFavorites;
