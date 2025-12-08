import ProfileDetails from '@/components/ProfileComponent/ProfileDetails';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StatusBar as RNStatusBar, SafeAreaView, StyleSheet, } from 'react-native';


export default function Profile() {


  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar style="light" backgroundColor="#1A35BD" />
      <ProfileDetails/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android'? RNStatusBar.currentHeight:0
  },
})