import * as React from "react";

import { Button, Text, View } from "react-native";

//navigation router
const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function Venues({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="All Venues"
        onPress={() => navController(navigation, "All Venues")}
      />
      <Button
        title="Filter"
        onPress={() => navController(navigation, "Filter")}
      />
      <Text>Liste mangler</Text>
    </View>
  );
}
