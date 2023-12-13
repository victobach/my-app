import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking, Alert,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function Book({ route, navigation }) {
//confirmation alert
  const showAlert = () => {
    Alert.alert(
      "Thank you for booking",
      "Your booking request has been sent to the venue",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const { venueName, venue } = route.params;
  const [contactName, setContactName] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const makePhoneCall = () => {
    const phoneNumber = "+4552410056"; // Replace with the desired phone number
    Linking.openURL(`tel:${phoneNumber}`);
  };

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

  initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserve a table</Text>
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
        <Button title="Submit Reservation" onPress={() => {
        sendDataToFirebase();
        showAlert();
    }}  />
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

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
  phoneNumberLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  phoneNumber: {
    color: "blue", // Style the phone number as a link
    fontSize: 18,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  filters: {
    marginTop: 20,
    color: "gray",
  },
});
