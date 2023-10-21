import { createStackNavigator } from "@react-navigation/stack";
import MyBugScreen from "./StackComponentsSettings/MyBug";
import SettingsScreen from "./SettingsScreen";
import EditUser from "./StackComponentsSettings/ModifyUserData";
import ContactUsScreen from "./StackComponentsSettings/ContactUs";

// Stack Navigator
const Stack = createStackNavigator();

// Define your navigation stack
const StackNavigatorSettings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="Contact Us" component={ContactUsScreen} />
      <Stack.Screen name="Report Bug" component={MyBugScreen}  // options={{ //   headerShown: true, // }}
     />
    </Stack.Navigator>
  );
};

export default StackNavigatorSettings;
