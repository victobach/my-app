import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {

        const profileRef = doc(firestore, "MyProfile", "MyProfile"); // My document ID's
        const docSnapshot = await getDoc(profileRef);

        if (docSnapshot.exists()) {
          setProfileData(docSnapshot.data());
        }
      } catch (error) {
        console.error("Error fetching profile data:", error); // Error-handling 
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!profileData) {
    return <Text>Error fetching profile data</Text>;
  }

  return ( // Takes data from Firebase and uses that to display for the user(s). 
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
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Settings</Text> 
      </TouchableOpacity>


      
      <Text style={styles.headerText}>My Profile:</Text>
      <Text style={styles.profileText}>Age: {profileData.Age}</Text>
      <Text style={styles.profileText}>Email: {profileData.Email}</Text>
      <Text style={styles.profileText}>Full Name: {profileData.FullName}</Text>
      <Text style={styles.profileText}>Mobile Number: {profileData.Mobilnummer}</Text>
      <Text style={styles.profileText}>User Name: {profileData.UserName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ // Styling: 
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

