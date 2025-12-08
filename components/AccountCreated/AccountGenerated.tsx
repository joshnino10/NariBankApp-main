import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { generateaAccount } from "./GenerateAccount";
export default function AccountGenerated() {
  const formatNaira = (amount: string | number) => {
    if (typeof amount === "string" && amount.includes("₦")) {
      return amount;
    }
    return `₦${Number(amount).toLocaleString()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        {generateaAccount.map((item) => (
          <View key={item.id}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={styles.accountNumber}>{item.AccountNumber}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.limitcontainer}>
              <View style={styles.limitBox}>
                <Text style={styles.label}>Daily Transaction Limit</Text>
                <Text style={styles.amount}>
                  {formatNaira(item.DailyLimit)}
                </Text>
              </View>

              <View style={styles.limitBox}>
                <Text style={styles.label}>Max. Account Balance</Text>
                <Text style={styles.amount}>
                  {formatNaira(item.MaxAccountBalance)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  contents: {
    backgroundColor: "#F3F3F3",
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  titleContainer: {
    alignSelf: "center",
    gap: 20,
  },
  title: {
    fontFamily: "intermedium",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    color: "#5B5B5B",
  },
  accountNumber: {
    textAlign: "center",
    fontFamily: "intersemibold",
    fontSize: 28,
    color: "#000",
  },
  divider: {
    marginTop: 30,
    marginBottom: 15,
    marginLeft: -30,
    marginRight: -30,
    height: 1,
    backgroundColor: "#D0D0D0",
  },
  limitcontainer: {
    marginTop: 30,
  },
  limitBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  label: {
    fontFamily: "interregular",
    fontSize: 14,
    color: "#5B5B5B",
    fontWeight: "400",
  },
  amount: {
    fontFamily: "intersemibold",
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

});
