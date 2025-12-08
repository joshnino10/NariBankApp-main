import { StyleSheet, View } from 'react-native'
import React from 'react'
import TranferToNari from '@/components/TransferToNari/TranferToNari'

export default function Index() {
  return (
    <View style={styles.container}>
     <TranferToNari/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        paddingTop:40
    }
})