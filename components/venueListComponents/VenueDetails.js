import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

const VenueDetails = ({ route, navigation }) => {
  const { venue, venueName } = route.params;

  return (
    <View style={styles.container}>
      <Button
        title="Booking"
        onPress={() => navController(navigation, "Book")}
      />
      <Text style={styles.header}>{venueName}</Text>
      <Text style={styles.h2}>{venue.adress}</Text>
      <Text style={styles.h2}>{venue.ageReg}</Text>
      <Text style={styles.h2}>{venue.atmosphere}</Text>
      <Text style={styles.h2}>{venue.capacity}</Text>
      <Text style={styles.h2}>{venue.description}</Text>
      <Text style={styles.h2}>{venue.liveMusic}</Text>
      <Text style={styles.h2}>{venue.musicGenre}</Text>
      <Text style={styles.h2}>{venue.openingHours}</Text>
      <Text style={styles.h2}>{venue.price}</Text>
      <Text style={styles.h2}>{venue.tableService}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default VenueDetails;
