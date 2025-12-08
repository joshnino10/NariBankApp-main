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
  import React, { useState } from "react";
  import CustomButton from "@/components/CustomButton/CustomButton";
  import CountryPicker from "react-native-country-picker-modal";
import { useRouter } from "expo-router";
  
  export default function Nationality() {
    const [countryCode, setCountryCode] = useState("NG"); // Default Nigeria
    const [country, setCountry] = useState({
      name: "Nigeria",
      flag: "🇳🇬",
      cca2: "NG",
    });
    const [withCountryNameButton, setWithCountryNameButton] = useState(true);
    const [visible, setVisible] = useState(false);

    const router = useRouter()

    const gotoLoginPin = ()=>{
        router.push('/loginpin')
    }
  
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.page}>
          <View>
            {/* Back Button */}
            <TouchableOpacity>
              <Image
                style={styles.back}
                source={require("../../assets/images/arrowBack.png")}
              />
            </TouchableOpacity>
  
            {/* Title + Description */}
            <View style={styles.titlecontainer}>
              <Text style={styles.title}>What’s your Nationality?</Text>
              <Text style={styles.desc}>
                Please select the country you are from
              </Text>
            </View>
  
            {/* Country Selection */}
            <View style={styles.SelectCountryContainer}>
              <Text style={styles.subtitle}>Country/ Region</Text>
  
              <View style={styles.selectCountry}>
                <TouchableOpacity onPress={() => setVisible(true)}>
                  <View style={styles.rowselect}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <CountryPicker
                      countryCode={countryCode}
                      withFilter={true}
                      withFlag={true}
                      withCountryNameButton={withCountryNameButton}
                      withAlphaFilter={true}
                      withEmoji={true}
                      onSelect={(c) => {
                        setCountryCode(c.cca2);
                        setCountry({
                          name: c.name?.common || c.name,
                          flag: c.flag,
                          cca2: c.cca2,
                        });
                        setVisible(false);
                      }}
                      visible={visible}
                      onClose={() => setVisible(false)}
                    />
                    </View>
                    <Image
                      style={styles.arrowdown}
                      source={require("../../assets/images/arrowdown.png")}
                    />
                  </View>
  
                  {/* Country Picker Modal */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
  
          {/* Footer Button */}
          <View>
            <CustomButton onPress={gotoLoginPin} title="Next" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safearea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    page: {
      flex: 1,
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    back: {
      width: 20,
      height: 40,
    },
    titlecontainer: {
      marginTop: 30,
      gap: 20,
    },
    title: {
      fontSize: 20,
      fontFamily: "intersemibold",
      fontWeight: "600",
      color: "#000000",
    },
    desc: {
      fontSize: 18,
      fontFamily: "interregular",
      color: "#000000",
    },
    SelectCountryContainer: {
      marginTop: 30,
      backgroundColor: "#B8C0EB",
      padding: 20,
      borderRadius: 10,
    },
    subtitle: {
      fontSize: 18,
      fontFamily: "interregular",
      fontWeight: "400",
      color: "#000000",
    },
    selectCountry: {
      marginTop: 7,
      backgroundColor: "white",
      borderRadius: 8,
    },
    arrowdown: {
      width: 20,
      height: 20,
    },
    rowselect: {
      marginTop: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical:5
    },
  });
  