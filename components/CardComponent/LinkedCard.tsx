import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View, Dimensions } from 'react-native'
import SmallButton from '../CustomButton/SmallButton'

const { width, height } = Dimensions.get('window')

export default function LinkedCard() {
    const router = useRouter()

    const gotoAddCards = ()=> {
        router.push('/adding cards/addcard')
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.cardsContainer}>
            <Image 
              style={styles.cardImage} 
              resizeMode='contain'  
              source={require('../../assets/images/visacard1.png')}
            />
            <Image 
              style={styles.cardImage} 
              resizeMode='contain'  
              source={require('../../assets/images/visacard2.png')}
            />
        </View>
        <View style={styles.btnContainer}>
            <SmallButton  
              onPress={gotoAddCards}
              textStyle={{
                  fontFamily: 'intersemibold',
                  fontWeight: '600',
                  fontSize: 20     
              }}
              title='+ Add card'
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 16
    },
    cardsContainer: {
        alignSelf: 'center',
        gap: 20
    },
    cardImage: {
        width: width * 0.9, // 90% of screen width
        height: height * 0.23, // 23% of screen height
    },
    btnContainer: {
        alignSelf: 'center',
        marginTop: 25
    },
})