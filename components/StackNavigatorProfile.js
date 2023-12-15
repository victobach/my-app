// Importing necessary components from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom components for the stack navigation
import MyProfile from "./stackComponentsProfile/MyProfile";
import MyFavorites from "./stackComponentsProfile/MyFavorites";
import MyReviews from "./stackComponentsProfile/MyReviews";
import StackNavigatorSettings from "./StackNavigatorSettings";
import StackNavigatorLogin from "./StackNavigatorLogin";

// Stack Navigator
const Stack = createStackNavigator();

// Function to define the stack navigator for Profile
function StackNavigatorProfile() {
  return (
    // Stack.Navigator to manage the stack of screens
    <Stack.Navigator>
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen name="Profile" component={MyProfile} />
      <Stack.Screen
        name="SettingsNavigator"
        component={StackNavigatorSettings}
      />
      <Stack.Screen name="LoginNavigator" component={StackNavigatorLogin} />
    </Stack.Navigator>
  );
}

// Exporting the StackNavigatorProfile component
export default StackNavigatorProfile;
