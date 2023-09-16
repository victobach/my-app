import * as React from "react";
import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function MyReviews({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Your reviews will be shown here:</Text>
    </View>
  );
}
