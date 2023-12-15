// Importing necessary components and functions from React and React Native
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Firebase configuration
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

// Function to navigate to a specified route
const navController = (navigation, route) => {
  navigation.navigate(route);
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Main component for displaying the list of venues
const VenueList = ({ navigation, route }) => {
  // State for venue data, applied filters, and loading status
  const [VenueData, setVenueData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch venue data and handle filters
  useEffect(() => {
    // Merge new filters from the route, if any
    const newFilters = route.params?.selectedFilters || [];
    setAppliedFilters((prev) => [...new Set([...prev, ...newFilters])]);

    // Fetch venue data
    const fetchVenueData = async () => {
      try {
        const VenueListRef = collection(firestore, "VenueList");
        const querySnapshot = await getDocs(VenueListRef);
        const venueDataArray = querySnapshot.docs.map((doc) => doc.data());
        setVenueData(venueDataArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching venue data:", error);
        setLoading(false);
      }
    };

    fetchVenueData();
  }, [firestore, route.params?.selectedFilters]);

  // Loading indicator
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  // Filter mappings for venue data properties
  const filterMappings = {
    Area: "Area",
    "Age Requirement": "Age Requirement",
    Atmosphere: "Atmosphere",
    Capacity: "Capacity",
    "Live Music": "Live Music",
    "Music Genre": "Music Genre",
    "Opening Hours": "Opening Hours",
    Price: "Price",
    "Table Service": "Table Service",
  };

  // Group filters by category
  const groupedFilters = appliedFilters.reduce((acc, filter) => {
    const [category, value] = filter.split(": ");
    acc[category] = acc[category] || [];
    acc[category].push(value);
    return acc;
  }, {});

  // Filter the venue data
  const filteredVenueData = VenueData.filter((venue) =>
    Object.entries(groupedFilters).every(([category, values]) => {
      const venueProperty = filterMappings[category];
      return (
        venue[venueProperty] &&
        values.some((value) => venue[venueProperty].includes(value))
      );
    })
  );

  // Display message if no venues match the filters
  if (filteredVenueData.length === 0) {
    return (
      <View style={styles.container}>
        <Button
          title="No Venues Match! Remove Filters?"
          onPress={() => setAppliedFilters([])}
        />
      </View>
    );
  }

  // Render the venue list
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Container for the navigation buttons */}
        <View style={styles.buttonContainer}>
          <Button
            title="Venue Map"
            onPress={() => navController(navigation, "Venue Map")}
            style={styles.navButton}
          />
          <Button
            title="Filter"
            onPress={() => navController(navigation, "Filter")}
            style={styles.navButton}
          />
          <Button
            title="Remove Filters"
            onPress={() => setAppliedFilters([])}
            style={styles.navButton}
          />
        </View>
  
        {/* Venue list */}
        {filteredVenueData.map((item, index) => (
          <TouchableHighlight
            key={index}
            style={styles.button}
            onPress={() =>
              navigation.navigate("VenueDetails", {
                venueName: item.venueName,
                venue: item,
              })
            }
          >
            <Text style={styles.h1}>{item.venueName}</Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
          };
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#d1f1ff",
      flex: 1,
      justifyContent: "center",
      
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 10,
      borderColor: '#1177DC', // Set the border color
    borderWidth: 2,     // Set the border width
    borderRadius: 5,    // Optional: for rounded corners
    padding: 10,        // Optional: to add some space inside the border
  
    },
    navButton: {
      flex: 1, // Each button will take equal width
      marginHorizontal: 5, // Spacing between buttons
      // Add more styling as needed for the button
      
    },
    h1: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 7,
      marginLeft: 60,
      
    },
  });
  
  export default VenueList;
  