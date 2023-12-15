import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFocusEffect } from "@react-navigation/native";

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

const MyFavorites = ({ route, navigation }) => {
  const [FavoritesData, setFavoritesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (!isAuthenticated) {
        navigation.navigate("LoginNavigator", { screen: "Login" });
      }
    }, [isAuthenticated, navigation])
  );

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  useEffect(() => {
    let unsubscribe = () => {};

    if (isAuthenticated) {
      const firestore = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const FavoritesRef = doc(firestore, "userFavorites", user.uid);
        unsubscribe = onSnapshot(
          FavoritesRef,
          (docSnapshot) => {
            if (docSnapshot.exists()) {
              setFavoritesData(docSnapshot.data());
            } else {
              console.log("No favorites data found");
            }
            setLoading(false);
          },
          (error) => {
            console.error("Error fetching favorites data:", error);
            setLoading(false);
          }
        );
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
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {Object.values(FavoritesData).map((item, index) => (
        <React.Fragment key={index}>
          <TouchableHighlight
            style={styles.button}
            onPress={() =>
              navigation.navigate("VenueDetails", {
                venueName: item.venueName,
                venue: item,
              })
            }
          >
            <Text style={styles.headerText}>{item.venueName}🌟</Text>
          </TouchableHighlight>
          {index < Object.values(FavoritesData).length - 1 && (
            <View style={styles.line} />
          )}
        </React.Fragment>
      ))}
    </ScrollView>
  )}
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#d1f1ff",
      flex: 1,
    },
    contentContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    line: {
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      marginVertical: 10,
    },
    headerText: {
      fontSize: 24,
      fontWeight: "bold",
      fontFamily: "Arial",
      color: "navy",
      marginTop: 5,
      marginBottom: 5,
    },
    favoriteText: {
      fontSize: 18,
      marginBottom: 5,
    },
  });
  
  export default MyFavorites