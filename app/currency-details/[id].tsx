import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'


export default function SingleCurrency() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <View style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../../assets/images/arrowBack.png')} />
                <Text style={styles.headerText}>Swap</Text>
                <View style={styles.icon}/>

            </View>

        </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0 
    },

    page:{
        paddingHorizontal:16

    },

    icon:{
      width:20,
      height:40
    },
    
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },

    headerText:{
        fontSize:20,
        fontFamily: 'intersemibold',
        fontWeight:"600",
    }

})