import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyBugScreen from "./StackComponentsSettings/MyBug";
import SettingsScreen from "./SettingsScreen";
import EditUser from "./StackComponentsSettings/ModifyUserData";
import MyContactScreen from "./StackComponentsSettings/MyContact";

// Stack Navigator
const Stack = createStackNavigator();

// Define your navigation stack
const StackNavigatorSettings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="ContactUs" component={MyContactScreen} />
      <Stack.Screen name="Report Bug" component={MyBugScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatorSettings;
