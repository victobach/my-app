import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
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
      <Button
        title="My Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />
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
