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

const navController = (navigation, route) => {
  navigation.navigate(route);
};

const Filter = ({ navigation }) => {
  //data skal være array for dette virker
  const arr = FilterList;
  //Alert for midlertidig test af knap
  const showAlert = () => {
    Alert.alert(
      "Filter Aktiveret",
      "Dit filter er nu aktivt",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title="Back" onPress={() => navigation.goBack()} />
        {arr.map((item, index) => (
          <TouchableHighlight
            style={styles.button}
            key={index}
            onPress={showAlert}
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
export default Filter;
