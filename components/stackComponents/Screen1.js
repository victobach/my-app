import * as React from "react";

import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="go to screen 2"
        onPress={() => navController(navigation, "Screen2")}
      />
      <Button title="Tilbage" onPress={() => navigation.goBack()} />
      <Text>Screen1</Text>

      <Text>vilkårligt indhold</Text>
    </View>
  );
}
