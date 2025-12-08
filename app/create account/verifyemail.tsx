import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { useGlobalContext } from "@/context/GlobalContext";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerifyEmail() {
  const { email } = useGlobalContext();
  const [verification, setVerification] = useState("");
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const router = useRouter();

  // countdown effect
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (timer === 0) {
      console.log("Resend code to:", email);
      setTimer(30); // restart countdown
    }
  };

  const handleNext = () => {
    if (verification.trim().length < 6) {
      alert("Please enter a valid 6-digit code");
      return;
    }
    router.push('/create account/enterid');
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.page}>
        <View>
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              style={styles.back}
              source={require("../../assets/images/arrowBack.png")}
            />
          </TouchableOpacity>

          {/* Title & Message */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Verify Email Address</Text>
            <Text style={styles.message} numberOfLines={2} adjustsFontSizeToFit>
              We sent a code to your email address, kindly verify it’s yours
            </Text>
          </View>

          {/* Email Display */}
          <View style={styles.emailContainer}>
            <Text style={styles.email}>{email}</Text>
          </View>

          {/* Verification Input */}
          <View style={{ marginTop: 20 }}>
            <CustomInput
              label="Verification Code"
              placeholder="******"
              value={verification}
              onChangeText={setVerification}
              maxLength={6}
            />
          </View>

          {/* Resend Code */}
          <View style={styles.resendContainer}>
            <TouchableOpacity
              onPress={handleResend}
              disabled={timer > 0} // disable until timer is 0
            >
              <Text
                style={[
                  styles.resendText,
                  { color: timer > 0 ? "#999" : "#35680D" },
                ]}
              >
                {timer > 0 ? `Resend Code in ${timer}s` : "Resend Code"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Next Button */}
        <View>
          <CustomButton title="Next" onPress={handleNext} />
        </View>
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
  page: {
    paddingHorizontal: 16,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  back: {
    width: 20,
    height: 40,
  },
  titleContainer: {
    marginTop: 30,
  },
  title: {
    fontFamily: "intersemibold",
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
    letterSpacing: 0,
  },
  message: {
    fontFamily: "interregular",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 20,
    lineHeight: 22,
  },
  emailContainer: {
    marginTop: 30,
  },
  email: {
    fontFamily: "intersemibold",
    fontSize: 20,
    color: "#1A35BD",
    letterSpacing: 0,
  },
  resendContainer: {
    marginTop: 30,
  },
  resendText: {
    textAlign: "center",
    fontFamily: "ArchivoBlack",
    fontSize: 16,
  },
});
