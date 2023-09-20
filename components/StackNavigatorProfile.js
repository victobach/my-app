import { createStackNavigator } from "@react-navigation/stack";
import MyFavorites from "./stackComponentsProfile/MyFavorites"
import MyProfile from "./stackComponentsProfile/myProfile";
import MyReviews from "./stackComponentsProfile/MyReviews";

const Stack = createStackNavigator();

function StackNavigatorProfile() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={MyProfile} />
        <Stack.Screen name="Favorites" component={MyFavorites} />
        <Stack.Screen name="Reviews" component={MyReviews} />
    </Stack.Navigator>
  );
}
export default StackNavigatorProfile;
