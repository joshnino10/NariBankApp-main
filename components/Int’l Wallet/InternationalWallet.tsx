import { Image, StyleSheet,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import InternationalAccBalance from './InternationalAccBalance'
import { useRouter } from 'expo-router'
import CurrencyRate from './CurrencyRate'


export default function InternationalWallet() {
    const router = useRouter()

    const goBack = ()=>{
        router.back()
    }

  return (
    <View style={styles.contents}>
        <TouchableOpacity onPress={goBack} style={{paddingHorizontal:16}}>
          <Image style={{width:20, height:40}} source={require('../../assets/images/arrowBack.png')}/>
        </TouchableOpacity>

        <View style={styles.accountBox}>
          <InternationalAccBalance/>
        </View>

        <View>
            <CurrencyRate/>  
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    contents:{
      
    },

    accountBox:{
        marginTop:20
    }
})