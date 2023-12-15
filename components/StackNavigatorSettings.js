// Importing React and necessary components from React Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Importing custom components for the stack navigation
import MyBugScreen from "./StackComponentsSettings/MyBug";
import SettingsScreen from "./SettingsScreen";
import EditUser from "./StackComponentsSettings/ModifyUserData";
import MyContactScreen from "./StackComponentsSettings/MyContact";

// Stack Navigator
const Stack = createStackNavigator();

// Define your navigation stack for Settings
const StackNavigatorSettings = () => {
  return (
    // Stack.Navigator to manage the stack of screens
    <Stack.Navigator
      // Configuring screen options for the entire stack
      screenOptions={{
        headerShown: false, // Hide the header for all screens in this stack
      }}
    >
      {/* Each Stack.Screen corresponds to a different screen in the stack */}
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="ContactUs" component={MyContactScreen} />
      <Stack.Screen name="Report Bug" component={MyBugScreen} />
    </Stack.Navigator>
  );
};

// Exporting the StackNavigatorSettings component
export default StackNavigatorSettings;
