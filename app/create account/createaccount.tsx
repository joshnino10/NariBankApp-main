import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { useGlobalContext } from "@/context/GlobalContext";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { router } from "expo-router";

export default function CreateAccount() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    referralCode,
    setReferralCode,
  } = useGlobalContext();
  const [showReferral, setShowReferral] = useState(false);

  const handleSignUp = () => {
    // Validate email
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password
    if (!password) {
      alert("Please enter a password");
      return;
    }

    // Password strength validation (minimum 8 characters)
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Proceed with sign up
    console.log("Sign up:", { email, password, referralCode });
    router.push("/create account/verifyemail")
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/small logo.png")}
            />
            <Text style={styles.logoText}>Nari</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create a Nari Account</Text>
          </View>

          <View style={styles.formContainer}>
            <CustomInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="yourmail@here.com"
              placeholderTextColor="#9A9A9A"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <CustomInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="******"
              placeholderTextColor="#9A9A9A"
            />

            <CustomInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="******"
              placeholderTextColor="#9A9A9A"
            />

            {/* Referral Code Section */}
            <TouchableOpacity
              style={styles.referralToggle}
              onPress={() => setShowReferral(!showReferral)}
              activeOpacity={0.7}
            >
              <Text style={styles.referralToggleText}>
                Have a referral code?
              </Text>
              {showReferral ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </TouchableOpacity>

            {showReferral && (
              <View style={styles.referralContainer}>
                <CustomInput
                  label="Referral Code (Optional)"
                  value={referralCode}
                  onChangeText={setReferralCode}
                  placeholder="Enter referral code"
                  placeholderTextColor="#9A9A9A"
                  autoCapitalize="characters"
                />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
     
      <View style={styles.buttonContainer}>
        <CustomButton title="Sign up" onPress={handleSignUp}  />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
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
  logoText: {
    fontFamily: "ArchivoBlack",
    fontSize: 20,
    color: "#1A35BD",
    fontWeight: "400",
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: "ArchivoBlack",
    color: "#000000",
  },
  formContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  referralToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#B8C0EB",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 20,
  },
  referralToggleText: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "600",
  },
  referralContainer: {
    marginTop: 10,
  },
});
