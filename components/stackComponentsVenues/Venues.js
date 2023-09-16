import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Button, Text, View } from "react-native";

//navigation router
const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function AllVenues({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.66422466427859,
          longitude: 12.541217948608216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      />
      <View style={{ position: "absolute", bottom: 10, left: 10 }}>
        <Button
          title="Filter"
          onPress={() => navController(navigation, "Filter")}
        />
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <Text>All Venues will be shown here</Text>
    </View>
  );
}
