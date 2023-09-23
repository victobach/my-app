import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

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

const MyFavorites = ({ navigation }) => {
  const [FavoritesData, setFavoritesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavoritesData = async () => {
      try {
        const FavoritesRef = doc(firestore, 'MyFavorites', 'MyFavorites'); // Replace with your actual document ID
        const docSnapshot = await getDoc(FavoritesRef);

        if (docSnapshot.exists()) {
          setFavoritesData(docSnapshot.data());
        }
      } catch (error) {
        console.error('Error fetching favorites data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoritesData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!FavoritesData) {
    return <Text>Error fetching favorites data</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Favorites:</Text>
      <Text style={styles.favoriteText}>Favorite 1: {FavoritesData.MyFavorite_1}</Text>
      <Text style={styles.favoriteText}>Favorite 2: {FavoritesData.MyFavorite_2}</Text>
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
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'blue',
    marginTop: 20,
    marginBottom: 10,
  },
  favoriteText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MyFavorites;
