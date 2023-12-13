import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { getAuth, initializeApp } from "firebase/auth";

const navController = (navigation, route) => {
  navigation.navigate(route);
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
const VenueDetails = ({ route, navigation }) => {
  //alert for no login
  const showAlert = () => {
    Alert.alert(
      "Not logged in!",
      "Please log in to add to favorites",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  const { venue, venueName } = route.params;
  const addToFavorites = async () => {
    try {
      const firestore = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userFavoritesRef = doc(firestore, "userFavorites", user.uid);
        await setDoc(userFavoritesRef, { [venueName]: venue }, { merge: true });
        console.log("Venue added to favorites");
      } else {
        console.log("User not logged in");
        showAlert();
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Booking"
        onPress={() => navigation.navigate("Book", { venueName: venue.venueName, venue: venue })}
      />
      <Button title="Add to Favorites" onPress={addToFavorites} />
      <Text style={styles.header}>{venueName}</Text>
      <Text style={styles.h2}>{venue.adress}</Text>
      <Text style={styles.h2}>{venue.ageReg}</Text>
      <Text style={styles.h2}>{venue.atmosphere}</Text>
      <Text style={styles.h2}>{venue.capacity}</Text>
      <Text style={styles.h2}>{venue.description}</Text>
      <Text style={styles.h2}>{venue.liveMusic}</Text>
      <Text style={styles.h2}>{venue.musicGenre}</Text>
      <Text style={styles.h2}>{venue.openingHours}</Text>
      <Text style={styles.h2}>{venue.price}</Text>
      <Text style={styles.h2}>{venue.tableService}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default VenueDetails;
