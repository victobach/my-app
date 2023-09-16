import { createStackNavigator } from "@react-navigation/stack";
import myFavorites from "./stackComponentsProfile/myFavorites";
import myProfile from "./stackComponentsProfile/myProfile";
import myReviews from "./stackComponentsProfile/myReviews";

const Stack = createStackNavigator();

function StackNavigatorProfile() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={myProfile} />
        <Stack.Screen name="Favorites" component={myFavorites} />
        <Stack.Screen name="Reviews" component={myReviews} />
    </Stack.Navigator>
  );
}
export default StackNavigatorProfile;
