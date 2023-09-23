import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(""); // Change to email input
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  const auth = getAuth();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email, // Use the email input directly
        password
      );

      const user = userCredential.user;
      console.log("Logged in as:", user.uid);

      // You can now navigate to the next screen or perform other actions upon successful login.
    } catch (error) {
      console.error("Error logging in:", error.code, error.message);
      // Handle the error and provide feedback to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <TextInput
        placeholder="Email" // Change placeholder to "Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        keyboardType="email-address" // Set keyboardType to "email-address"
        autoCapitalize="none" // Disable auto-capitalization for email
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      <Button
        title="Forgot Password?"
        onPress={() => navController(navigation, "ForgotPassword")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  footerText: {
    marginTop: 20,
    color: "blue",
  },
});
