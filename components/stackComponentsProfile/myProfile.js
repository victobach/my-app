import * as React from "react";
import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function MyProfile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="My Favorites"
        onPress={() => navController(navigation, "Favorites")}
      />
      <Button
        title="My Reviews"
        onPress={() => navController(navigation, "Reviews")}
      />
      <Text>Your profile will be shown here:</Text>
    </View>
  );
}
