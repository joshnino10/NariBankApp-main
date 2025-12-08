import AddingCard from '@/components/CardComponent/AddingCard'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, } from 'react-native'

export default function Addcard() {
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
        <AddingCard/>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop:Platform.OS === "android"? 20:0
    },

})