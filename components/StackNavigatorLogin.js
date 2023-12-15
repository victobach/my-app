// Importing necessary components from React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom components for the stack navigation
import LoginScreen from "./loginComponents/UserLogin";
import SignUpScreen from "./loginComponents/SignUp";
import CreateVenueScreen from "./loginComponents/PartnerSignUp";

// Stack Navigator
const Stack = createStackNavigator();

// Function to define the stack navigator for Login
function StackNavigatorLogin() {
  return (
    // Stack.Navigator to manage the stack of screens
    <Stack.Navigator>
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PartnerSignUp" component={CreateVenueScreen} />
    </Stack.Navigator>
  );
}

// Exporting the StackNavigatorLogin component
export default StackNavigatorLogin;
