import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./stackComponents/Screen1";
import Screen2 from "./stackComponents/Screen2";
import DetailsScreen from "./DetailsScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3" component={DetailsScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
