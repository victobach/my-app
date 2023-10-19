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
import QRCode from "react-native-qrcode-svg";

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
  const [qrCodeData, setQRCodeData] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRef = doc(firestore, "MyProfile", "MyProfile"); // My document ID's
        const docSnapshot = await getDoc(profileRef);

        if (docSnapshot.exists()) {
          const email = docSnapshot.data().Email;
          setProfileData(docSnapshot.data());
          setQRCodeData(email);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error); // Error-handling
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!profileData) {
    return <Text>Error fetching profile data</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleQRCode}>
        <Text style={styles.buttonText}>Show QR Code</Text>
      </TouchableOpacity>

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
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("LoginNavigator", { screen: "Login" })
        }
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>My Profile:</Text>
      <Text style={styles.profileText}>Age: {profileData.Age}</Text>
      <Text style={styles.profileText}>Email: {profileData.Email}</Text>
      <Text style={styles.profileText}>Full Name: {profileData.FullName}</Text>
      <Text style={styles.profileText}>
        Mobile Number: {profileData.Mobilnummer}
      </Text>
      <Text style={styles.profileText}>User Name: {profileData.UserName}</Text>

      {showQRCode && <QRCode value={qrCodeData} size={200} />}
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
