import { initializeApp } from 'firebase/app';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
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

// Create a Firestore instance
const firestore = getFirestore();

const MyReviews = ({ navigation }) => {
  const [ReviewsData, setReviewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const ReviewsRef = doc(firestore, 'MyReviews', 'MyReviews'); // Replace with your actual document ID
        const docSnapshot = await getDoc(ReviewsRef);

        if (docSnapshot.exists()) {
          setReviewsData(docSnapshot.data());
        }
      } catch (error) {
        console.error('Error fetching reviews data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!ReviewsData) {
    return <Text>Error fetching reviews data</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity // Change Button to TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>My Favorites</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>My reviews:</Text>
      <Text style={styles.profileText}>My first review: {ReviewsData.MyReview_1}</Text>
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

export default MyReviews;
