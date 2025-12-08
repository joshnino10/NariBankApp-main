import { Platform, SafeAreaView, StatusBar, StyleSheet, } from 'react-native'
import React from 'react'
import ErrorDetails from '@/components/Errordetails/ErrorDetails'

export default function Error() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ErrorDetails/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0
  }
    
})