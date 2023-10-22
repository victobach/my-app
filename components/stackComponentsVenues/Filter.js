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

const navController = (navigation, route) => {
  navigation.navigate(route);
};
const Filter = ({ navigation }) => {
  const arr = FilterList;

  const handleFilterPress = (selectedFilter) => {
    navigation.navigate("FilterOptions", { chosenFilter: selectedFilter });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Back" onPress={() => navigation.goBack()} />
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
export default Filter;
