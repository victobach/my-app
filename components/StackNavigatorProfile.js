import { createStackNavigator } from "@react-navigation/stack";
import MyProfile from "./stackComponentsProfile/MyProfile";
import MyFavorites from "./stackComponentsProfile/MyFavorites";
import MyReviews from "./stackComponentsProfile/MyReviews";
import StackNavigatorSettings from "./StackNavigatorSettings";

const Stack = createStackNavigator();

function StackNavigatorProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={MyProfile} />
      <Stack.Screen name="Favorites" component={MyFavorites} />
      <Stack.Screen name="Reviews" component={MyReviews} />
      <Stack.Screen name="Settings" component={StackNavigatorSettings}/>
    </Stack.Navigator>
  );
}
export default StackNavigatorProfile;
