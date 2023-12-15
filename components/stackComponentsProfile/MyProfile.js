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
      {/* Centered Header with Name and Owl Emoji */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>NightOwl 🦉</Text>
      </View>

      {/* Invite a friend textbox */}
      <View style={styles.textBox}>
        <Text style={styles.textBoxText}>
          Invite a friend and give them a month free of premium + get a free
          month yourself. NightOwl 🦉
        </Text>
      </View>

      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Your existing buttons with emojis and lines */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.icon}>🌟</Text>
        <Text style={styles.buttonTextLarge}>My Favorites</Text>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "Settings" })
        }
      >
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.buttonTextLarge}>Edit my profile</Text>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "Report Bug" })
        }
      >
        <Text style={styles.icon}>🐞</Text>
        <Text style={styles.buttonTextLarge}>Report a bug</Text>
      </TouchableOpacity>
      <View style={styles.line} />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("SettingsNavigator", { screen: "ContactUs" })
        }
      >
        <Text style={styles.icon}>📧</Text>
        <Text style={styles.buttonTextLarge}>Contact Us</Text>
      </TouchableOpacity>

      {/* Separator Line */}
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  buttonTextLarge: {
    fontSize: 20,
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  textBox: {
    backgroundColor: "navy",
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
  },
  textBoxText: {
    color: "white",
    fontSize: 16,
  },
});

export default MinProfil;
