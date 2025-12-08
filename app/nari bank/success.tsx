import SuccessDetails from '@/components/SuccessDetails/successDetails'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet,  } from 'react-native'

export default function Success() {
  return (
    <SafeAreaView style={styles.safearea}>
      <SuccessDetails/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor:'white',
    paddingTop:Platform.OS === 'android'? StatusBar.currentHeight:0
  }
})