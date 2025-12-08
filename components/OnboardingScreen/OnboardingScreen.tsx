import { useRouter, } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: ["Welcome to ", { text: "Nari", color: "#1A35BD" }],
    subtitle: ["It's not just an app, it's a ", { text: "lifestyle", color: "#1A35BD" }],
    image: require("../../assets/images/onboarding icon 1.png"),
  },
  {
    id: "2",
    title: [{ text: "Control", color: "#1A35BD" }, " all your accounts"],
    subtitle: "Link all your accounts and send money straight from Nari",
    image: require("../../assets/images/onboarding icon 2.png"),
  },
  {
    id: "3",
    title: [{ text: "Top up", color: "#1A35BD" }, " airtime, electricity & more"],
    subtitle: "Handle your bills in seconds. Get rewarded as you go",
    image: require("../../assets/images/onboarding icon 3.png"),
  },
  {
    id: "4",
    title: [{ text: "Lock", color: "#1A35BD" }, " your savings with ease"],
    subtitle:
      "Create savings goals, automate deposits and split payments from multiple accounts",
    image: require("../../assets/images/onboarding icon 4.png"),
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToLogin = () => {
    router.replace('/login');
  };
  const goToCreateAccount = () => {
    router.replace("/create account/createaccount");
  };

  const renderTextParts = (parts, style) => {
    if (Array.isArray(parts)) {
      return parts.map((part, index) =>
        typeof part === "string" ? (
          <Text key={index} style={style}>
            {part}
          </Text>
        ) : (
          <Text key={index} style={[style, { color: part.color }]}>
            {part.text}
          </Text>
        )
      );
    }
    return <Text style={style}>{parts}</Text>;
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title} numberOfLines={2}>{renderTextParts(item.title, styles.title)}</Text>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.subtitle}>
        {renderTextParts(item.subtitle, styles.subtitle)}
      </Text>
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor="white" />
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/small logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.nari}>Nari</Text>
      </View>

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />

      {/* Dots */}
      {renderDots()}

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.createButton} onPress={goToCreateAccount}>
          <Text style={styles.createText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  logoContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: 40,
    height: 40,
  },
  nari: {
    fontFamily: "ArchivoBlack",
    fontSize: 20,
    color: "#1A35BD",
    fontWeight: "400",
    marginLeft: 6,
  },
  slide: {
    width,
    height: height * 0.65,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  image: {
    width: 250,
    height: 235,
    marginBottom: 30,
  },
  title: {
    fontSize: 33,
    fontFamily: "intersemibold",
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 23,
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "intermedium",
    textAlign: "center",
    color: "#000",
    lineHeight: 22,
    maxWidth: 300,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
    gap: 8,
    marginBottom: Platform.OS === "ios" ? 40 : 50,
  },
  dot: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  activeDot: {
    backgroundColor: "#1A35BD",
  },
  inactiveDot: {
    backgroundColor: "#fff",
  },
  buttons: {
    alignItems: "center",
    marginBottom: 25,
  },
  createButton: {
    backgroundColor: "#1A35BD",
    width: 256,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  createText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "intersemibold",
  },
  loginButton: {
    width: 256,
    height: 52,
    borderWidth: 2,
    borderColor: "#1A35BD",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#1A35BD",
    fontSize: 20,
    fontFamily: "intersemibold",
  },
});