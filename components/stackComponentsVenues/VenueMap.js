import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Function for navigating to a specified route
const navController = (navigation, route) => {
  navigation.navigate(route);
};
// AllVenues component to display a map with venue markers

export default function AllVenues({ navigation }) {
  // Array containing venue data (id, name, latitude, longitude)
  const venues = [
    {
      id: 1,
      name: "A-bar",
      latitude: 55.6751,
      longitude: 12.5656,
    },
    {
      id: 2,
      name: "Aloha bar",
      latitude: 55.6754,
      longitude: 12.5662,
    },
    {
      id: 3,
      name: "Angels Club",
      latitude: 55.6789,
      longitude: 12.5771,
    },
    {
      id: 4,
      name: "Arch",
      latitude: 55.6812,
      longitude: 12.5756,
    },
    {
      id: 5,
      name: "Badabing",
      latitude: 55.6801,
      longitude: 12.5714,
    },
    {
      id: 6,
      name: "Bakken Kbh",
      latitude: 55.6903,
      longitude: 12.5844,
    },
    {
      id: 7,
      name: "Bistro Central",
      latitude: 55.6816,
      longitude: 12.571,
    },
    {
      id: 8,
      name: "Café Det Elektriske Hjørne",
      latitude: 55.6758,
      longitude: 12.5672,
    },
    {
      id: 9,
      name: "Café Nexus",
      latitude: 55.6782,
      longitude: 12.5709,
    },
    {
      id: 10,
      name: "Cafe Victor",
      latitude: 55.6815,
      longitude: 12.5772,
    },
    {
      id: 11,
      name: "Club Mambo Copenhagen",
      latitude: 55.6784,
      longitude: 12.5752,
    },
    {
      id: 12,
      name: "Culture Box",
      latitude: 55.6746,
      longitude: 12.5739,
    },
    {
      id: 13,
      name: "DR Koncerthuset",
      latitude: 55.6613,
      longitude: 12.5913,
    },
    {
      id: 14,
      name: "Dorsia",
      latitude: 55.674,
      longitude: 12.5659,
    },
    {
      id: 15,
      name: "Drop Inn",
      latitude: 55.6791,
      longitude: 12.5715,
    },
    {
      id: 16,
      name: "Fermentoren",
      latitude: 55.6807,
      longitude: 12.5707,
    },
    {
      id: 17,
      name: "Gorilla",
      latitude: 55.6679,
      longitude: 12.5577,
    },
    {
      id: 18,
      name: "La Fontaine",
      latitude: 55.6837,
      longitude: 12.5761,
    },
    {
      id: 19,
      name: "Levi’s",
      latitude: 55.6772,
      longitude: 12.5703,
    },
    {
      id: 20,
      name: "Mojo Blues Bar",
      latitude: 55.6763,
      longitude: 12.5704,
    },
    {
      id: 21,
      name: "Royal Arena",
      latitude: 55.6251,
      longitude: 12.5656,
    },
    {
      id: 22,
      name: "Rust",
      latitude: 55.6666,
      longitude: 12.5766,
    },
    {
      id: 23,
      name: "Salon 39",
      latitude: 55.6828,
      longitude: 12.5728,
    },
    {
      id: 24,
      name: "Vega",
      latitude: 55.6651,
      longitude: 12.5385,
    },
    {
      id: 25,
      name: "Wallstreet Pub",
      latitude: 55.6823,
      longitude: 12.5714,
    },
    {
      id: 26,
      name: "Zoo",
      latitude: 55.6712,
      longitude: 12.573,
    },
  ];
  // Initial region for the map view
  const initialRegion = {
    latitude: 55.66422466427859,
    longitude: 12.541217948608216,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // Render UI components
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
// Styles for the component
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
