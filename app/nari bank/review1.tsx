import TransferReview from '@/components/TransferReview/TransferReview'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Review1() {
  return (
    <View style={styles.container}>
        <TransferReview/>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:16

    }

})