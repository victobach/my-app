import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const navController = (navigation, route) => {
  navigation.navigate(route);
};
const rewards = [
  {
    name: "10% Coupon all night",
    tablesRequired: 5,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp",
  },
  {
    name: "Customized drink",
    tablesRequired: 10,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp",
  },
  {
    name: "Skip the line",
    tablesRequired: 15,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Invited to exclusive events",
    tablesRequired: 20,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "VIP Lounge Access",
    tablesRequired: 30,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "50% off drinks before midnight",
    tablesRequired: 40,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Free beer all night",
    tablesRequired: 50,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Wall of Fame",
    tablesRequired: 75,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Complete merchandise package",
    tablesRequired: 100,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
];

function RewardItem({ reward, navigation }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigation.navigate("LoginNavigator", { screen: "Login" });
      }
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Premium_Single_Product", { reward })}
      style={styles.rewardItem}
    >
      <Image
        source={{
          uri: reward.image,
        }}
        style={styles.rewardImage}
      />
      <View style={styles.rewardInfo}>
        <Text style={styles.rewardName}>{reward.name}</Text>
        <Text>Tables Required: {reward.tablesRequired}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Premium({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium</Text>
      <Text style={styles.title}>For only 39 kr an month</Text>
      <ScrollView style={styles.scrollView}>
        {rewards.map((reward, index) => (
          <RewardItem key={index} reward={reward} navigation={navigation} />
        ))}
      </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  scrollView: {
    width: "100%",
  },
  rewardItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rewardImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
