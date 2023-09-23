import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

//data der skal sættes ind skal være properties af "venue" og lægges som textfelt (venue.eksempel)
const navController = (navigation, route) => {
  navigation.navigate(route);
};
const VenueDetails = ({ route, navigation }) => {
  const { venue } = route.params;

  return (
    <View style={styles.container}>
      <Button
        title="Booking"
        onPress={() => navController(navigation, "Book")}
      />
      <Text style={styles.h1}>{venue.venueName}</Text>
      <Text style={styles.h1}>{venue.adress}</Text>
      <Text style={styles.h1}>{venue.ageReg}</Text>
      <Text style={styles.h1}>{venue.atmosphere}</Text>
      <Text style={styles.h1}>{venue.capacity}</Text>
      <Text style={styles.h1}>{venue.description}</Text>
      <Text style={styles.h1}>{venue.liveMusic}</Text>
      <Text style={styles.h1}>{venue.musicGenre}</Text>
      <Text style={styles.h1}>{venue.openingHours}</Text>
      <Text style={styles.h1}>{venue.price}</Text>
      <Text style={styles.h1}>{venue.tableService}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default VenueDetails;
