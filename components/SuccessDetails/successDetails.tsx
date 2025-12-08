import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

export default function SuccessDetails() {
  const router = useRouter();

  const goBack = () => {
    router.replace("/nari bank/review1");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
     
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/lottie/Success.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
          <View style={styles.sucessBox}>
            <Text style={styles.success}>Success</Text>
            <Text style={styles.transferSucessful}>Transfer Successful</Text>
          </View>
        </View>

        {/* ✅ Action Buttons Section */}
        <View style={styles.actionButtons}>
          <View style={styles.row}>
            {/* Save Beneficiary */}
            <TouchableOpacity style={styles.btn}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/beneficiary icon.png")}
              />
              <Text style={styles.btnText}>Save Beneficiary</Text>
            </TouchableOpacity>

            {/* Share Receipt */}
            <TouchableOpacity style={styles.btn} onPress={goBack}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/share icon.png")}
              />
              <Text style={styles.btnText}>Share Receipt</Text>
            </TouchableOpacity>
          </View>

          {/* Repeat Transfer - Centered */}
          <TouchableOpacity style={[styles.btn, styles.centerBtn]} onPress={goBack}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/repeat tranfer icon.png")}
            />
            <Text style={styles.btnText}>Repeat Transfer</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Close Button */}
        <CustomButton onPress={goBack} title="Close" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  animationContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  lottie: {
    width: 150,
    height: 150,
  },
  sucessBox: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  success: {
    fontFamily: "interbold",
    fontWeight: "700",
    fontSize: 20,
    color: "#1E1E1E",
  },
  transferSucessful: {
    fontFamily: "interregular",
    fontWeight: "400",
    fontSize: 20,
    color: "#1E1E1E",
  },
  actionButtons: {
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: "white",
  },
  btn: {
    flex: 1,
    height: 168,
    backgroundColor: "#0B164F",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  centerBtn: {
    alignSelf: "center",
    width: "48%",
  },
  btnText: {
    fontFamily: "intersemibold",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
