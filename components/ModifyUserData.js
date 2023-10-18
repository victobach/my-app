import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  deleteUser,
  updatePassword,
  onAuthStateChanged, // Import the onAuthStateChanged function
  signOut, // Import the signOut function
} from "firebase/auth";
import Modal from "react-native-modal";

const navController = (navigation, route) => {
  navigation.navigate(route);
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [
    isDeleteAccountConfirmationModalVisible,
    setDeleteAccountConfirmationModalVisible,
  ] = useState(false);
  const [user, setUser] = useState(null); // State to store user information

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

  // Use the `onAuthStateChanged` function to listen to the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [auth]);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("Logged in as:", user.uid);

      navigation.navigate("VenueList");
    } catch (error) {
      console.error("Error logging in:", error.code, error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = () => {
    setChangePasswordModalVisible(true);
  };

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      try {
        await updatePassword(auth.currentUser, newPassword);
        console.log("Password changed successfully");
        setChangePasswordModalVisible(false);
      } catch (error) {
        console.error("Error changing password:", error);
      }
    } else {
      console.error("Passwords do not match");
    }
  };

  const showDeleteAccountConfirmation = () => {
    setDeleteAccountConfirmationModalVisible(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      await deleteUser(auth.currentUser);
      console.log("Account deleted successfully");
      setDeleteAccountConfirmationModalVisible(false);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigation.navigate("UserLogin"); // Redirect to the UserLogin screen
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <TouchableOpacity onPress={handleChangePassword}>
        <Text style={styles.button}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showDeleteAccountConfirmation}>
        <Text style={styles.button}>Delete Account</Text>
      </TouchableOpacity>
      {user && <Button title="Logout" onPress={handleLogout} />}

      <Modal isVisible={isChangePasswordModalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <Button title="Change Password" onPress={handlePasswordChange} />
          <Button
            title="Close"
            onPress={() => setChangePasswordModalVisible(false)}
          />
        </View>
      </Modal>

      <Modal isVisible={isDeleteAccountConfirmationModalVisible}>
        <View style={styles.modalContainer}>
          <Text>Are you sure you want to delete your account?</Text>
          <Button title="Confirm" onPress={confirmDeleteAccount} />
          <Button
            title="Cancel"
            onPress={() => setDeleteAccountConfirmationModalVisible(false)}
          />
        </View>
      </Modal>
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
  button: {
    color: "blue",
    marginBottom: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
