import { Image, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../CustomInput/CustomInput'
import { useRouter } from 'expo-router'
import CustomButton from '../CustomButton/CustomButton'

export default function AddingCard() {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [pin, setPin] = useState('')

  const router = useRouter()

  const goBack = () => {
    router.back()  
  }

  const handleConfirm = () => {
    if (!cardNumber || !expiryDate || !cvv || !pin) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    // All fields are filled, proceed
    console.log({ cardNumber, expiryDate, cvv, pin })
    Alert.alert('Success', 'Card added successfully!')
    // Optionally navigate
    // router.push('/success')
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/arrowBack.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Card Number */}
      <CustomInput
        label="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Enter 16-19 digit number"
        keyboardType="numeric"
      />

      {/* Expiry + CVV */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <CustomInput
            label="Expiry Date"
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM / YY"
          />
        </View>

        <View style={{ flex: 1 }}>
          <CustomInput
            label="CVV"
            value={cvv}
            onChangeText={setCvv}
            placeholder="Enter CVV"
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* PIN */}
      <CustomInput
        label="Card PIN"
        value={pin}
        onChangeText={setPin}
        placeholder="Enter Card PIN"
        keyboardType="numeric"
      />

      {/* Confirm Button */}
      <View style={{ marginTop: 30 }}>
        <CustomButton textStyle={{
            fontFamily: 'intersemibold',
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: '600'

        }} title='Confirm'
         onPress={handleConfirm} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  
  },
  header: {
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 40,
    resizeMode: 'contain',
  },
})
