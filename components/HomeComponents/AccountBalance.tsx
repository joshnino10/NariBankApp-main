import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from 'expo-clipboard';
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get('window')

export default function AccountBalance() {
  
  const Amount = "5,000,000.00";
  const AccountNumber = "0715334703";
  const AltAccountNumber = "9126794670";
  
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const copyAccountNumber = async () => {
    await Clipboard.setStringAsync(AccountNumber);
    Alert.alert("Copied", "Account number copied to clipboard");
  };

  return (
    <ImageBackground style={styles.box}>
      <View style={styles.contentContainer}>
        <Text style={styles.AvailableBalance}>AVAILABLE BALANCE</Text>

        <View style={styles.mainRow}>
          <View style={styles.detailsContainer}>
            <View style={styles.amountrow}>
              <Image
                style={styles.nairaIcon}
                source={require("../../assets/images/nairaicon.png")}
              />
              <Text style={styles.amount}>
                {isBalanceVisible ? Amount : "****"}
              </Text>
            </View>

            <View style={styles.accountRow}>
              <Text style={styles.label}>ACCOUNT NUMBER:</Text>
              <Text style={styles.AccountNumber}>
                {isBalanceVisible ? AccountNumber : "**********"}
              </Text>
            </View>

            <View style={styles.accountRow}>
              <Text style={styles.label}>Alt. Acc. Number : </Text>
              <Text style={styles.AccountNumber}>
                {isBalanceVisible ? AltAccountNumber : "**********"}
              </Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Feather 
                name={isBalanceVisible ? "eye-off" : "eye"} 
                size={24} 
                color="white" 
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={copyAccountNumber}>
              <Ionicons name="copy-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  box: {
    width: width * 0.94,
    height: Platform.OS === 'android'? height * 0.18: height * 0.16,
    backgroundColor: "#1A35BD",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  AvailableBalance: {
    fontFamily: "intersemibold",
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 8,
    letterSpacing: 0.5,
    fontWeight: '600',
  },

  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsContainer: {
    gap: 6,
  },

  amountrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  nairaIcon: {
    width: 30,
    height: 30,
  },

  amount: {
    fontFamily: "interbold",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 4,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  label: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: "intermedium",
    fontWeight: "500",
    opacity: 0.9,
  },

  AccountNumber: {
    fontSize: 12,
    color: "#FBFBFB",
    fontFamily: "interbold",
    fontWeight: "500",
  },

  iconContainer: {
    alignSelf: "flex-start",
    gap: 10,
  },
});