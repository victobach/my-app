import { createStackNavigator } from "@react-navigation/stack";
import MyFavorites from "./stackComponentsProfile/myFavorites";
import MyProfile from "./stackComponentsProfile/myProfile";
import MyReviews from "./stackComponentsProfile/myReviews";

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
