import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CardHeader() {
    const router = useRouter()

    const goback = ()=>{
        router.back()
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <View style={styles.content}>
            <TouchableOpacity onPress={goback}>

            <Image 
              style={styles.icon} 
              source={require('../../assets/images/arrowBack.png')}
              />
              </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Linked Accounts</Text>
            </View>
            
            <View style={styles.icon}/>
         
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android'? 10 : 0,
  },
  content: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    width: 20,
    height: 40,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'intersemibold',
    fontWeight: '600',
    color: '#000000',
  },
}) 