import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// navigation router
const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function AllVenues({ navigation }) {
  const venues = [
    {
      id: 1,
      name: "Venue 1",
      latitude: 55.66422466427859,
      longitude: 12.541217948608216,
    },
    // Add more venues as needed
  ];

  const initialRegion = {
    latitude: 55.66422466427859,
    longitude: 12.541217948608216,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {venues.map((venue) => (
          <Marker
            key={venue.id}
            coordinate={{
              latitude: venue.latitude,
              longitude: venue.longitude,
            }}
            title={venue.name}
          />
        ))}
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="arrow-left" size={20} color="white" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navController(navigation, "Filter")}
        >
          <FontAwesome name="filter" size={20} color="white" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
});
