import LinkedCard from '@/components/CardComponent/LinkedCard'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Card() {
  return (
    <View style={styles.container}>
       <StatusBar style='dark' backgroundColor='white'/>
      <LinkedCard/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})