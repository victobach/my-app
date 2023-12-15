//imports
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function CreateVenueScreen({ navigation }) {
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [venueName, setVenueName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleCreateVenue = async () => {
    setIsLoading(true);

    const data = {
      ContactPerson: contactPerson,
      Email: email,
      PhoneNumber: phoneNumber,
      VenueAddress: venueAddress,
      VenueName: venueName,
    };

    try {
      await addDoc(collection(db, "PartnerSignUp"), data);
      console.log("Venue data saved to Firestore successfully!");

      // Show a success message using toast
      Toast.show({
        text1: "Request sent!",
        text2: "The NightOwl team will get back to you.",
        type: "success",
        visibilityTime: 4000, // Display for 4 seconds
        autoHide: true,
      });
    } catch (error) {
      console.error("Error saving venue data to Firestore:", error);
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <TextInput
        placeholder="Contact Person"
        value={contactPerson}
        onChangeText={(text) => setContactPerson(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Venue Address"
        value={venueAddress}
        onChangeText={(text) => setVenueAddress(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Venue Name"
        value={venueName}
        onChangeText={(text) => setVenueName(text)}
        style={styles.input}
      />
      <Button
        title="Create Venue"
        onPress={handleCreateVenue}
        disabled={isLoading}
      />

      <Toast style={{ zIndex: 1 }} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
