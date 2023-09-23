import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//data der skal sættes ind skal være properties af "venue" og lægges som textfelt (venue.eksempel)

const VenueDetails = ({ route }) => {
  const { venue } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{venue}</Text>
      <Text style={styles.h1}>{venue.adress}</Text>
      <Text style={styles.h1}>{venue.description}</Text>
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
