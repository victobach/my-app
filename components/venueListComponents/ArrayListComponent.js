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
const firestore = getFirestore(app);

const ArrayListComponent = ({ navigation }) => {
  const [VenueData, setVenueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [firestore]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (VenueData.length === 0) {
    return <Text>Error fetching Venue data</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Venue Map"
          onPress={() => navController(navigation, "Venues")}
        />
        <Button
          title="Filter"
          onPress={() => navController(navigation, "Filter")}
        />
        {VenueData.map((item, index) => (
          <TouchableHighlight
            style={styles.button}
            key={index}
            onPress={() => navigation.navigate("VenueDetails", { venue: item })}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000",
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default ArrayListComponent;
