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
    "Classical",
    "Blues",
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
const navController = (navigation, route) => {
  navigation.navigate(route);
};
const FilterOptions = ({ route, navigation }) => {
  // Henter 'chosenFilter' fra 'route.params'. Dette angiver den valgte filtertype.
  const { chosenFilter } = route.params;
  // Henter de data, der skal vises for den valgte filtertype. Hvis der ikke findes data for den valgte filter, bruges en tom array.
  const dataToShow = filters[chosenFilter] || [];
  // Bruger Reacts 'useState' til at oprette en state variabel 'checkedItems'. Denne variabel holder styr på de valgte filterelementer.
  const [checkedItems, setCheckedItems] = useState([]);
  // Til at tilføje eller fjerne et element fra 'checkedItems'.
  const toggleCheck = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems((prevItems) => prevItems.filter((i) => i !== item));
    } else {
      setCheckedItems((prevItems) => [...prevItems, item]);
    }
  };
  // 'applyFilter' funktionen skal bruges til at anvende de valgte filtre. I denne version udskrives de valgte elementer blot til konsollen.
  const applyFilter = () => {
    // Create a list of filters in the format "Category: Value"
    const formattedFilters = checkedItems.map(
      (item) => `${chosenFilter}: ${item}`
    );
    navigation.navigate("VenueList", { selectedFilters: formattedFilters });
    console.log(formattedFilters);
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
