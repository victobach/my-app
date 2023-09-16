import * as React from "react";

import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function Filter({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="All Venues"
        onPress={() => navController(navigation, "AllVenues")}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Filters shown here</Text>
    </View>
  );
}
