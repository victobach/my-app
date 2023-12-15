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

const Natugle = require("../../assets/NatUgle.png");
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

  const {
    container,
    logo,
    button,
    modalContainer,
    input,
    buttonText, // Added buttonText style for consistent white text
    modalTitle,
  } = styles;

  return (
    <View style={container}>
      <Image style={logo} />
      <Image
        source={Natugle}
        style={{ width: 250, height: 200, marginTop: -350 }}
      />
      <TouchableOpacity onPress={handleChangePassword}>
        <Text style={[button, buttonText]}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showDeleteAccountConfirmation}>
        <Text style={[button, buttonText]}>Delete account</Text>
      </TouchableOpacity>
      {user && <Button title="Logout" onPress={handleLogout} />}

      <Modal isVisible={isChangePasswordModalVisible}>
        <View style={modalContainer}>
          <Text style={[modalTitle, buttonText]}>Change password</Text>
          <TextInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            style={input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={input}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={handlePasswordChange}
            style={[button, buttonText]}
          >
            <Text>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChangePasswordModalVisible(false)}
            style={[button, buttonText]}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={isDeleteAccountConfirmationModalVisible}>
        <View style={modalContainer}>
          <Text style={[modalTitle, buttonText]}>Confirm deletion</Text>
          <Text>Are you sure you want to delete your account?</Text>
          <TouchableOpacity
            onPress={confirmDeleteAccount}
            style={[button, buttonText]}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeleteAccountConfirmationModalVisible(false)}
            style={[button, buttonText]}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
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
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
