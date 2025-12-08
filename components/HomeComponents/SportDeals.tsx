import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function SportDeals() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.icon} 
          source={require('../../assets/images/sport banner.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sports Deals</Text>
        <Text style={styles.descText}>
          Bet on your favorite team and get instant cashback
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EBF8',
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 50
   
  },


  icon: {
    width: 40,
    height: 40,
  },

  textContainer: {
    flex: 1,
  },

  text: {
    fontFamily: 'intersemibold',
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 1,
  },

  descText: {
    fontFamily: 'interregular',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 16,
  },
})