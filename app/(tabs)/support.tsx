import SupportDetails from '@/components/SupportComponents/SupportDetails';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StatusBar as RnStatusBar, SafeAreaView, StyleSheet, } from 'react-native';

export default function Support() {
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar style="light" backgroundColor="#1A35BD"/>
      <SupportDetails/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android'? RnStatusBar.currentHeight:0

  },

})