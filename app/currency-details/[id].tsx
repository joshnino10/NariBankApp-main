import { StyleSheet, Text,  SafeAreaView, Platform, StatusBar  } from 'react-native'
import React from 'react'


export default function SingleCurrency() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Text>[id]</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0 
    }

})