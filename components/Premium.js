import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const rewards = [
  {
    name: "10% Coupon",
    tablesRequired: 5,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp",
  },
  {
    name: "Free Appetizer",
    tablesRequired: 10,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp",
  },
  {
    name: "20% Off Your Next Meal",
    tablesRequired: 15,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Complimentary Dessert",
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
    name: "50% Off Any Dish",
    tablesRequired: 40,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Dinner for Two",
    tablesRequired: 50,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Exclusive Chef's Table Reservation",
    tablesRequired: 75,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
  {
    name: "Weekend Getaway Package",
    tablesRequired: 100,
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/unlock-secret-reward-for-investment-opportunity-8135561-6515953.png?f=webp", // Replace with your image path
  },
];

function RewardItem({ reward, navigation }) {
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
      <Text style={styles.title}>Battlepass coming soon!</Text>
      <Text style={styles.subtitle}>Get Premium</Text>
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
