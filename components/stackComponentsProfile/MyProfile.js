import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Firebase credentials
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

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MinProfil = ({ navigation }) => {
  const [profileData, setProfileData] = useState(null);
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>My Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Reviews")}
      >
        <Text style={styles.buttonText}>My Reviews</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "Settings" })
        }
      >
        <Text style={styles.buttonText}>Change my details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "Report Bug" })
        }
      >
        <Text style={styles.buttonText}>Report a bug</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "ContactUs" })
        }
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styling:
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MinProfil;
