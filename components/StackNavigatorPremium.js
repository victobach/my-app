import { createStackNavigator } from "@react-navigation/stack";

import Premium from "./Premium";

import SingleProductScreen from "./StackComponentsPremium/SingleProductScreen";
import StackNavigatorLogin from "./StackNavigatorLogin";

const Stack = createStackNavigator();

function StackNavigatorProfile() {
  return (
    <Stack.Navigator initialRouteName="Premium_Main">
      <Stack.Screen component={Premium} name="Premium_Main" />

      <Stack.Screen
        component={SingleProductScreen}
        name="Premium_Single_Product"
      />
      <Stack.Screen name="LoginNavigator" component={StackNavigatorLogin} />
    </Stack.Navigator>
  );
}

export default StackNavigatorProfile;
