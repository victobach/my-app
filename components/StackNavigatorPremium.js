// Importing necessary components from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom components for the stack navigation
import Premium from "./Premium";
import SingleProductScreen from "./StackComponentsPremium/SingleProductScreen";
import StackNavigatorLogin from "./StackNavigatorLogin";

// Stack Navigator
const Stack = createStackNavigator();

// Function to define the stack navigator for Profile
function StackNavigatorProfile() {
  return (
    // Stack.Navigator to manage the stack of screens with an initial route
    <Stack.Navigator initialRouteName="Premium_Main">
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen component={Premium} name="Premium_Main" />
      <Stack.Screen
        component={SingleProductScreen}
        name="Premium_Single_Product"
      />
      <Stack.Screen name="LoginNavigator" component={StackNavigatorLogin} />
    </Stack.Navigator>
  );
}

// Exporting the StackNavigatorProfile component
export default StackNavigatorProfile;
