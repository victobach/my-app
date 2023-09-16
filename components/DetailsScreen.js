import * as React from "react";

import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="go to screen 1"
        onPress={() => navController(navigation, "Screen1")}
      />
      <Button
        title="go to screen 2"
        onPress={() => navController(navigation, "Screen2")}
      />
      <Text>Detaljer!</Text>

      <Text>vilkårligt indhold</Text>
    </View>
  );
}
