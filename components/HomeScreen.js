import * as React from "react";

import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hjem!</Text>

      <Text>vilkårligt indhold</Text>
    </View>
  );
}
