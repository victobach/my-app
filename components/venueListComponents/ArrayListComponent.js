import * as React from "react";
import { initializeApp } from "firebase/app";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Button,
} from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
//import { VenueList } from "../../BarLists"; // Database importeres her

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

const navController = (navigation, route) => {
  navigation.navigate(route);
};

const ArrayListComponent = ({ navigation }) => {
  const [VenueData, setVenueData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        const VenueListRef = collection(firestore, "VenueList"); // Reference to the 'VenueList' collection
        const querySnapshot = await getDocs(VenueListRef);

        const venueDataArray = [];

        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            venueDataArray.push(doc.data());
          }
        });

        // Now, venueDataArray contains data from all documents in the 'VenueList' collection
        setVenueData(venueDataArray);
      } catch (error) {
        console.error("Error fetching venue data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenueData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!VenueData || VenueData.length === 0) {
    return <Text>Error fetching Venue data</Text>;
  }
  //data skal være array for dette virker
  const arr = VenueData;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button
          title="Venue Map"
          onPress={() => navController(navigation, "Venues")}
        />
        <Button
          title="Filter"
          onPress={() => navController(navigation, "Filter")}
        />
        {arr.map((item, index) => (
          <TouchableHighlight
            style={styles.button}
            key={index}
            onPress={() => navigation.navigate("VenueDetails", { venue: item })}
          >
            <Text style={styles.h1}>{item.venueName}</Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Definering af vores stylesheet
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000", // Rød baggrund
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default ArrayListComponent;
