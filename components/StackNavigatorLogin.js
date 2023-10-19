import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./loginComponents/UserLogin";
import SignUpScreen from "./loginComponents/SignUp";
import CreateVenueScreen from "./loginComponents/PartnerSignUp";

const Stack = createStackNavigator();

function StackNavigatorLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PartnerSignUp" component={CreateVenueScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigatorLogin;
