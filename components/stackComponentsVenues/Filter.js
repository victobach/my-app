import * as React from "react";

import { Button, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

import { getFirestore, setDoc, doc } from "firebase/firestore";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function Filter({ navigation }) {
  //_____
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
  const sendDataToFireBase = async () => {
    const firestore = getFirestore();
    await setDoc(doc(firestore, "users", "user_id"), {
      phone: "4323432",
      name: "pik",
    });
  };
  initializeApp(firebaseConfig);
  //______
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Send Data" onPress={sendDataToFireBase}></Button>
      <Button
        title="All Venues"
        onPress={() => navController(navigation, "AllVenues")}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Filters shown here</Text>
    </View>
  );
}
