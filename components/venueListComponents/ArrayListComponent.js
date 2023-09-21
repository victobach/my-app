import * as React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { VenueList } from "../../BarLists"; // You're not using this import, make sure it's needed

const ArrayListComponent = (props) => {
  // Create an example array for demonstration
  const arr = VenueList;

  return (
    <View style={styles.container}>
      <ScrollView>
        {arr.map((item, index) => (
          <Text style={styles.h1} key={index}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Definering af vores stylesheet
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000", // Rød baggrund
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default ArrayListComponent;
