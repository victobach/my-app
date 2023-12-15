import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const SingleProductScreen = (props) => {
  const { route } = props;
  const { reward } = route.params;

  const qrCodeData = reward.code || "Default QR Code Data";

  return (
    <View style={styles.container}>
      <Text style={styles.rewardText}>{reward.name}</Text>
      <View style={styles.qrCodeContainer}>
        {/* Display the QR code */}
        <QRCode value={qrCodeData} size={300} />
      </View>
    </View>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rewardText: {
    fontSize: 34, // Set your desired text size
    textAlign: "center",
    marginTop: 20, // Adjust this margin to your preference
  },
  qrCodeContainer: {
    marginTop: 40, // Adjust this margin to add space between text and QR code
  },
});
