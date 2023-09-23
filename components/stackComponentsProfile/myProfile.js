import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'; // Import Firestore from 'firebase/firestore/lite'

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

// Create a Firestore instance
const firestore = getFirestore();

const MinProfil = ({ navigation }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRef = doc(firestore, 'MyProfile', 'MyProfile'); // Replace with your actual document ID
        const docSnapshot = await getDoc(profileRef);

        if (docSnapshot.exists()) {
          setProfileData(docSnapshot.data());
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="My Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />
      <Button
        title="My Reviews"
        onPress={() => navigation.navigate("Reviews")}
      />
      <Text>Your profile:</Text>
      <Text>Age: {profileData.Age}</Text>
      <Text>Email: {profileData.Email}</Text>
      <Text>Fulde navn: {profileData.FullName}</Text>
      <Text>Mobil nummer: {profileData.Mobilnummer}</Text>
      <Text>User Name: {profileData.UserName}</Text>
    </View>
  );
};

export default MinProfil;
