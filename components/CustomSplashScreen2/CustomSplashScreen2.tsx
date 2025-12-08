import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Animated, {
  BounceInDown,
  SlideOutLeft,
} from "react-native-reanimated";



export default function CustomSplashScreen2() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="blue" />

      {showLogo && (
        <Animated.Image
          entering={BounceInDown.delay(500)}
          exiting={SlideOutLeft.duration(500)}
          style={styles.logo}
          source={require("../../assets/images/Logo 5 1.png")}
        />
      )}
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
    width: 250,
    height: 250,
  },
});