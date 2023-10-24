import { StyleSheet, Text, View } from "react-native";

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
