import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

const filters = {
  Area: [
    "København K",
    "Østerbro",
    "Nørrebro",
    "Vesterbro",
    "Amager",
    "Sydhavn",
    "Frederiksberg",
    "Valby",
  ],
  "Age Requirement": ["18+", "21+", "25+"],
  Atmosphere: [
    "Casual",
    "Upscale",
    "Dive Bar",
    "Sports Bar",
    "Rooftop",
    "Beachfront",
  ],
  Capacity: [
    "Small (<50 people)",
    "Medium (50-150 people)",
    "Large (>150 people)",
  ],
  "Live Music": ["Yes, frequently", "Occasionally", "No live music"],
  "Music Genre": [
    "Rock",
    "Pop",
    "Jazz",
    "Electronic",
    "Country",
    "R&B",
    "Reggae",
    "Mixed",
  ],
  "Opening Hours": [
    "Morning (8am - 12pm)",
    "Afternoon (12pm - 5pm)",
    "Evening (5pm - 10pm)",
    "Late Night (10pm - 3am)",
  ],
  Price: [
    "$ (Budget-friendly)",
    "$$ (Moderate)",
    "$$$ (Pricey)",
    "$$$$ (Upscale)",
  ],
  "Table Service": ["Available", "Not available"],
};

const FilterOptions = ({ route }) => {
  const { chosenFilter } = route.params;
  const dataToShow = filters[chosenFilter] || [];

  const [checkedItems, setCheckedItems] = useState([]);

  const toggleCheck = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems((prevItems) => prevItems.filter((i) => i !== item));
    } else {
      setCheckedItems((prevItems) => [...prevItems, item]);
    }
  };

  const applyFilter = () => {
    console.log("Checked Items:", checkedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chosenFilter}</Text>
      <FlatList
        data={dataToShow}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleCheck(item)}
          >
            <Text style={styles.item}>{item}</Text>
            {checkedItems.includes(item) && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${chosenFilter}_${index}`}
      />
      <Button title="Apply Filter" onPress={applyFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    flex: 1,
  },
  checkmark: {
    fontSize: 24,
    color: "green",
    marginRight: 10,
  },
});

export default FilterOptions;
