import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

export default function ErrorDetails() {

    const router = useRouter()

    const goBack = ()=>{
        router.replace('/nari bank/review1')
    }
  return (
    <View style={styles.container}>
      <View style={styles.contentSection}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require("../../assets/lottie/Error Occurred!.json")}
            autoPlay
            loop
            style={styles.lottie}
          />

          <View style={styles.errorBox}>
            <Text style={styles.error}>Error</Text>
            <Text style={styles.failed}>Transfer Failed</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
              <Image 
                style={styles.icon} 
                source={require('../../assets/images/report icon.png')}
              />
              <Text style={styles.btnText}>Report Issue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={goBack}>
              <Image 
                style={styles.icon} 
                source={require('../../assets/images/error retry.png')}
              />
              <Text style={styles.btnText}>Retry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

       <CustomButton onPress={goBack} title="Close" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
   
  },
  contentSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  animationContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  lottie: {
    width: 150,
    height: 150,
  },
  errorBox: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  error: {
    fontFamily: 'interbold',
    fontWeight: "700",
    fontSize: 20,
    color: '#1E1E1E',
  },
  failed: {
    fontFamily: 'interregular',
    fontWeight: "400",
    fontSize: 20,
    color: '#1E1E1E',
  },
  actionButtons: {
    marginBottom: 80,
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    gap: 12,
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: 'white',
  },
  btn: {
    flex: 1,
    height: 168,
    backgroundColor: '#0B164F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  btnText: {
    fontFamily: 'intersemibold',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});