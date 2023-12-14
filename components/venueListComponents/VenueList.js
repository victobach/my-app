import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button, StyleSheet, ScrollView, TouchableHighlight} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

//firebase opsætning
const firebaseConfig = {
  apiKey: "AIzaSyBEwykSQwC2GMgWNMdaVWlfvkKjTfc-uXY",
  authDomain: "innovationogtekt.firebaseapp.com",
  databaseURL:
    "https://innovationogtekt-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innovationogtekt",
  storageBucket: "innovationogtekt.appspot.com",
  messagingSenderId: "378823600165",
  appId: "1:378823600165:web:3c7edb88d421c4aed177cc",
  measurementId: "G-HRRR03JBJL",
};

const navController = (navigation, route) => {
  navigation.navigate(route);
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

//import af data fra firebase til array
const VenueList = ({ navigation, route }) => {
  const [VenueData, setVenueData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Merge new filters from the route, if any
    const newFilters = route.params?.selectedFilters || [];
    setAppliedFilters(prev => [...new Set([...prev, ...newFilters])]);

    // Fetch venue data
    const fetchVenueData = async () => {
      try {
        const VenueListRef = collection(firestore, "VenueList");
        const querySnapshot = await getDocs(VenueListRef);
        const venueDataArray = querySnapshot.docs.map(doc => doc.data());
        setVenueData(venueDataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching venue data:", error);
        setLoading(false);
      }
    };

    fetchVenueData();
  }, [firestore, route.params?.selectedFilters]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  // Filter the venue data
  const filterMappings = {
    Area: 'Area',
    "Age Requirement": 'Age Requirement',
    Atmosphere: 'Atmosphere',
    Capacity: 'Capacity',
    "Live Music": 'Live Music',
    "Music Genre": 'Music Genre',
    "Opening Hours": 'Opening Hours',
    Price: 'Price',
    "Table Service": 'Table Service'
  };
  
// Group filters by category
const groupedFilters = appliedFilters.reduce((acc, filter) => {
  const [category, value] = filter.split(': ');
  acc[category] = acc[category] || [];
  acc[category].push(value);
  return acc;
}, {});

// Filter the venue data
const filteredVenueData = VenueData.filter(venue =>
  Object.entries(groupedFilters).every(([category, values]) => {
    const venueProperty = filterMappings[category];
    return venue[venueProperty] && values.some(value => venue[venueProperty].includes(value));
  })
);
  
  if (filteredVenueData.length === 0) {
    return (
      <View style={styles.container}>
        <Button title="No Venues Match! Remove Filters?" onPress={() => setAppliedFilters([])} />
      </View>
    );
  }

// Render the venue list
return (
  <View style={styles.container}>
    <ScrollView>
      {/* Navigation buttons */}
      <Button title="Venue Map" onPress={() => navController(navigation, "Venue Map")} />
      <Button title="Filter" onPress={() => navController(navigation, "Filter")} />
      <Button title="Remove Filters" onPress={() => setAppliedFilters([])} />

      {/* Venue list */}
      {filteredVenueData.map((item, index) => (
        <TouchableHighlight key={index} style={styles.button} onPress={() => navigation.navigate("VenueDetails", { venueName: item.venueName, venue: item })}>
          <Text style={styles.h1}>{item.venueName}</Text>
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

export default VenueList;

