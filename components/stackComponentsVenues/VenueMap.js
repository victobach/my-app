/*import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import icons from a library

// navigation router
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
    backgroundColor: "blue", // Background color of the button
    padding: 10,
    borderRadius: 5, // Rounded corners
    marginRight: 10, // Spacing between buttons
    flexDirection: "row", // Align text and icon horizontally
    alignItems: "center", // Align text and icon vertically
  },
  buttonText: {
    color: "white", // Text color
    marginLeft: 5, // Spacing between icon and text
    fontSize: 16,
  },
});
*/
import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import icons from a library

// navigation router
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
        showsUserLocation={true} // Show the user's location as a blue dot
      />
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
    backgroundColor: "blue", // Background color of the button
    padding: 10,
    borderRadius: 5, // Rounded corners
    marginRight: 10, // Spacing between buttons
    flexDirection: "row", // Align text and icon horizontally
    alignItems: "center", // Align text and icon vertically
  },
  buttonText: {
    color: "white", // Text color
    marginLeft: 5, // Spacing between icon and text
    fontSize: 16,
  },
});
