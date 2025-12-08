import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

export default function CustomSplashScreen1() {
  return (
    <View style={styles.page}>
        <StatusBar barStyle="light-content" backgroundColor="blue"/>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo 5 1.png")}
      />
      <Text style={styles.text}>It’s not just an app, it’s a lifestyle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  logo: {
    width: 180,
    height: 180,
  },
  text: {
    fontFamily: "medium",
    color: '#FFFFFF',
    fontSize:14
  },
});
