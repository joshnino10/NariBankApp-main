import AccountBalance from '@/components/HomeComponents/AccountBalance'
import AdditionalService from '@/components/HomeComponents/AdditionalService'
import SportDeals from '@/components/HomeComponents/SportDeals'
import Transaction from '@/components/TransactionDetails/Transaction'
import React from 'react'
import { Platform, SafeAreaView, ScrollView,  StyleSheet, } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar style='dark' backgroundColor='white'/>
     
      <ScrollView>
        <AccountBalance/>
        <Transaction/>
        <AdditionalService/>
        <SportDeals/>

      </ScrollView>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android"? 10:0
    },
})