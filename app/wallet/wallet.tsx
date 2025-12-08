import { SafeAreaView, StyleSheet,} from 'react-native'
import React from 'react'
import InternationalWallet from '@/components/Int’l Wallet/InternationalWallet'
import Animated, { BounceInDown,  FadeOut } from 'react-native-reanimated';

export default function Wallet() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <Animated.View
          entering={BounceInDown.duration(1000)} 
          exiting={FadeOut.duration(100)}
           >
             <InternationalWallet/>
        
        </Animated.View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white'
  },

 
    
})