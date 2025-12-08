import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { currrencyData } from "./CurrencyData";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";

export default function CurrencyRate() {
  const router = useRouter()

  const showCurrency = (currencyId:any)=> {
    router.push(`/currency-details/${currencyId}`)
  }


  return (
    <View style={styles.contents}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Current Rate</Text>

        <TouchableOpacity style={styles.swapbtn}>
          <Text style={styles.swaptext}>Swap</Text>
          <Image
            style={styles.swapIcon}
            source={require("../../assets/images/swap-outline.png")}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.currencyBox}>
        {currrencyData.map((item) => (
          <TouchableOpacity onPress={showCurrency}  style={styles.Currencies} key={item.code}>
            <View style={styles.row}>
            
              <View style={styles.leftSection}>
                <Image style={styles.Flag} source={item.Icon} />
                <Text style={styles.code}>{item.code}</Text>
              </View>
              
              <View>
                <View style={styles.rateRow}>
                  <Image
                    style={styles.currencyIcon}
                    source={require('../../assets/images/currencyicon.png')}
                  />
                  <Text style={styles.exchangerate}>{item.ExchangeRate}</Text>
                </View>

                <View style={styles.trendRow}>
                  <Feather
                    name={item.isPositive ? "arrow-up-right" : "arrow-down-right"}
                    size={24}
                    color={item.isPositive ? "green" : "red"}
                  />
                  <Text style={styles.percentage}>{item.percentage}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  swapbtn: {
    backgroundColor: "#1A35BD",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  swaptext: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },

  swapIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },

  
  currencyBox: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  Currencies: {
    paddingVertical: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  Flag: {
    width: 60,
    height: 45,
  },

  code: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },

  rateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },

  currencyIcon: {
    width: 24,
    height: 24,
  },

  exchangerate: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },

  trendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginLeft: 5,
  },

  percentage: {
    fontSize: 14,
    fontWeight: "500",
  },
});
