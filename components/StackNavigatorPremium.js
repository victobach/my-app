import { createStackNavigator } from "@react-navigation/stack";

import Premium from "./Premium";

import SingleProductScreen from "./StackComponentsPremium/SingleProductScreen";

const Stack = createStackNavigator();

function StackNavigatorProfile() {
  return (
    <Stack.Navigator initialRouteName="Premium_Main">
      <Stack.Screen component={Premium} name="Premium_Main" />

      <Stack.Screen
        component={SingleProductScreen}
        name="Premium_Single_Product"
      />
    </Stack.Navigator>
  );
}

export default StackNavigatorProfile;
