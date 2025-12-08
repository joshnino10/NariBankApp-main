import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Walletlayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
     <Stack.Screen name='wallet'/>
    </Stack>
  )
}

const styles = StyleSheet.create({})