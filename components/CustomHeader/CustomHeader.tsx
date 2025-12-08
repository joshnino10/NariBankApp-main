
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image style={styles.icon} source={require('../../assets/images/arrowBack.png')}/>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent:"center"
  },

  icon: {
    width:20, 
    height:40,

  },

  title: { fontSize: 20, fontWeight: "600", flex: 1, textAlign: "center", color:"#000000", fontFamily:"intersemibold" },
});

export default CustomHeader;
