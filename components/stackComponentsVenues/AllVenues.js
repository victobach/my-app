import * as React from "react";

import { Button, Text, View } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function AllVenues({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Filter"
        onPress={() => navController(navigation, "Filter")}
      />
      <Button
        title="Venue Map"
        onPress={() => navController(navigation, "Venues")}
      />
      <Text>All Venues will be shown here</Text>
    </View>
  );
}
