import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Button,
} from "react-native";

import { VenueList } from "../../BarLists"; // Database importeres her

const navController = (navigation, route) => {
  navigation.navigate(route);
};

const ArrayListComponent = ({ navigation }) => {
  //data skal være array for dette virker
  const arr = VenueList;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Venue Map"
          onPress={() => navController(navigation, "Venues")}
        />
        <Button
          title="Filter"
          onPress={() => navController(navigation, "Filter")}
        />
        {arr.map((item, index) => (
          <TouchableHighlight
            style={styles.button}
            key={index}
            onPress={() => navigation.navigate("VenueDetails", { venue: item })}
          >
            <Text style={styles.h1}>{item}</Text>
          </TouchableHighlight>
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
