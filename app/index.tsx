import OnboardingaScreen from '@/components/OnboardingScreen/OnboardingScreen'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet,  View } from 'react-native'

export default function Index() {
  return (
    <SafeAreaView  style={styles.SafeArea}> 
        <StatusBar barStyle="dark-content" backgroundColor="white"/>
     <View style={styles.page}>

      <OnboardingaScreen/>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0

  },
  page:{
    paddingHorizontal:16
  }
})

