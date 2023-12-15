// Importing necessary components and functions from React and React Native
import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { getAuth, initializeApp } from "firebase/auth";

// Function to navigate to a specified route
const navController = (navigation, route) => {
  navigation.navigate(route);
};

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

// VenueDetails component
const VenueDetails = ({ route, navigation }) => {
  // Alert for users who are not logged in
  const showAlert = () => {
    Alert.alert(
      "Not logged in!",
      "Please log in to add to favorites",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  // Extracting parameters from the route
  const { venue, venueName } = route.params;

  // Function to add the venue to favorites
  const addToFavorites = async () => {
    try {
      // Initialize Firestore and Auth
      const firestore = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // Document reference for user favorites
        const userFavoritesRef = doc(firestore, "userFavorites", user.uid);

        // Set document with venue data, merging if document already exists
        await setDoc(userFavoritesRef, { [venueName]: venue }, { merge: true });
        console.log("Venue added to favorites");
      } else {
        console.log("User not logged in");
        showAlert(); // Show alert if the user is not logged in
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  // Render UI components
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.header}>{venueName}</Text>
      <View style={styles.line} />
      {/* Button to navigate to the booking screen */}
      <Button
        title="Booking"
        onPress={() =>
          navigation.navigate("Book", {
            venueName: venue.venueName,
            venue: venue,
          })
        }
      />

      {/* Button to add the venue to favorites */}
      <Button title="Add to Favorites" onPress={addToFavorites} />

      {/* Venue details */}
      <Text style={styles.h2}>Address: {venue.address}</Text>
      <Text style={styles.h2}>Area: {venue.Area}</Text>
      <Text style={styles.h2}>Age Requirement: {venue["Age Requirement"]}</Text>
      <Text style={styles.h2}>Atmosphere: {venue.Atmosphere}</Text>
      <Text style={styles.h2}>Capacity: {venue.Capacity}</Text>
      <Text style={styles.h2}>Description: {venue.description}</Text>
      <Text style={styles.h2}>Live Music: {venue["Live Music"]}</Text>
      <Text style={styles.h2}>Music Genre: {venue["Music Genre"]}</Text>
      <Text style={styles.h2}>Opening Hours: {venue["Opening Hours"]}</Text>
      <Text style={styles.h2}>Price: {venue.Price}</Text>
      <Text style={styles.h2}>Table Service: {venue["Table Service"]}</Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32, // Larger font size for the main header
    fontWeight: 'bold',
    color: 'navy',
  },
  h2: {
    fontSize: 19, // Larger and bubbly font size for h2
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'darkblue',
  },
  line: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    marginVertical: 10,
    marginBottom: 5,
    width: '100%', // Make the line span the entire width of the screen
  },
});

// Exporting the component
export default VenueDetails;
