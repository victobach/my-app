import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { getFirestore, doc, getDoc, onSnapshot  } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
initializeApp(firebaseConfig);

const MyFavorites = ({  route, navigation }) => {
  const [FavoritesData, setFavoritesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigation.navigate("LoginNavigator", { screen: "Login" });
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, [navigation]);

  useEffect(() => {
    let unsubscribe = () => {};
  
    if (isAuthenticated) {
      const firestore = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        const FavoritesRef = doc(firestore, "userFavorites", user.uid);
        unsubscribe = onSnapshot(FavoritesRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            setFavoritesData(docSnapshot.data());
          } else {
            // Handle the case where the document does not exist
            console.log("No favorites data found");
          }
          setLoading(false);
        }, (error) => {
          console.error("Error fetching favorites data:", error);
          setLoading(false);
        });
      }
    }
  
    return () => unsubscribe(); // Unsubscribe on unmount
  }, [isAuthenticated]);
  

  if (!isAuthenticated || loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!FavoritesData) {
    return <Text>Error fetching favorites data</Text>;
  }

  return (
    <View style={styles.container}>
    {Object.values(FavoritesData).map((item, index) => (
      <TouchableHighlight
        style={styles.button}
        key={index}
        onPress={() => navigation.navigate("VenueDetails", { venueName: item.venueName, venue: item })}
      >
        <Text style={styles.h1}>{item.venueName}</Text>
      </TouchableHighlight>
    ))}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "blue",
    marginTop: 20,
    marginBottom: 10,
  },
  favoriteText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MyFavorites;
