// Importing necessary components and functions from React and React Native
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

// Function to navigate to a specified route
const navController = (navigation, route) => {
  navigation.navigate(route);
};

// Book component
export default function Book({ route, navigation }) {
  // Alert to show a confirmation message after booking
  const showAlert = () => {
    Alert.alert(
      "Thank you for booking",
      "Your booking request has been sent to the venue",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  // Extracting parameters from the route
  const { venueName, venue } = route.params;

  // State variables for input fields
  const [contactName, setContactName] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Function to make a phone call using the Linking API
  const makePhoneCall = () => {
    const phoneNumber = "+4552410056"; // Replace with the desired phone number
    Linking.openURL(`tel:${phoneNumber}`);
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

  // Function to send data to Firebase
  const sendDataToFirebase = async () => {
    const firestore = getFirestore();
    await setDoc(doc(firestore, "venues", "venue_id"), {
      place: venueName,
      contact: {
        name: contactName,
        numberOfGuests: guestNumber,
        phoneNumber: contactNumber,
      },
    });
    // Clear the input fields after sending data
    setContactName("");
    setGuestNumber("");
    setContactNumber("");
  };

  // Initialize Firebase app
  initializeApp(firebaseConfig);

  // Render UI components
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserve a table at {venueName}</Text>
      <TextInput
        placeholder="Number of Guests"
        value={guestNumber}
        onChangeText={(text) => setGuestNumber(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Name"
        value={contactName}
        onChangeText={(text) => setContactName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Phone Number"
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
        style={styles.input}
      />
      <View style={styles.buttons}>
        <Button
          title="Submit Reservation"
          onPress={() => {
            sendDataToFirebase();
            showAlert();
          }}
        />
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
