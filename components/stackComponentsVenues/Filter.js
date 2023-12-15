import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

import { FilterList } from "../../FilterList"; // Database importeres her
import FilterOptions from "./FilterOptions";

// Function for navigating to a specified route
const navController = (navigation, route) => {
  navigation.navigate(route);
};

// Filter component to display a list of filters
const Filter = ({ navigation }) => {
  // Array containing filter options
  const arr = FilterList;

  // Function to handle filter press and navigate to FilterOptions screen
  const handleFilterPress = (selectedFilter) => {
    navigation.navigate("FilterOptions", { chosenFilter: selectedFilter });
  };

  // Render UI components
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Button to navigate back */}
        <Button title="Back" onPress={() => navigation.goBack()} />

        {/* Mapping through filter options and displaying each as a touchable button */}
        {arr.map((item, index) => (
          <TouchableHighlight
            style={styles.button}
            key={index}
            onPress={() => handleFilterPress(item)}
          >
            <Text style={styles.h1}>{item}</Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1f1ff",
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

// Exporting the Filter component as the default export
export default Filter;
