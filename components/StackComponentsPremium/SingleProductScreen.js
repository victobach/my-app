/*import { StyleSheet, Text, View } from "react-native";

import React from "react";

const SingleProductScreen = (props) => {
  const { route } = props;

  const { reward } = route.params;

  return (
    <View style={styles.container}>
      <Text>{reward.name}</Text>
    </View>
  );
};
export default SingleProductScreen;

const styles = StyleSheet.create({});
*/

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg"; // Import the QRCode component

const SingleProductScreen = (props) => {
  const { route } = props;
  const { reward } = route.params;

  // Ensure reward.code is a valid string or provide a default value
  const qrCodeData = reward.code || "Default QR Code Data";

  return (
    <View style={styles.container}>
      <Text>{reward.name}</Text>

      {/* Display the QR code */}
      <QRCode value={qrCodeData} size={200} />
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
});
