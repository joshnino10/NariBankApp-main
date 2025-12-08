import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import SplitPaymentModal from '../SplitPaymentModal/SplitPaymentModal'

export default function TransferToNari() {
    const [recipientNumber, setRecipientNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [narration, setNarration] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const router = useRouter()

    const formatAmount = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '')
        
        if (numericValue) {
            return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        return ''
    }

    const handleAmountChange = (value: string) => {
        const formatted = formatAmount(value)
        setAmount(formatted)
    }

    const goToPay = () => {
        if (!recipientNumber.trim() || !amount.trim()) {
            Alert.alert(
                'Missing Information',
                'Please fill all fields before proceeding',
                [{ text: 'OK' }]
            )
            return
        }
        router.push('/nari bank/review1')
    }

    const handleSplitPayment = () => {
        setModalVisible(true)
    }

  return (
    <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
        <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <CustomInput 
                    label='Recipient Number'
                    placeholder='**********'
                    value={recipientNumber}
                    maxLength={10}
                    onChangeText={setRecipientNumber}
                    keyboardType='numeric'
                />

                <CustomInput 
                    label='Amount'
                    placeholder='#100-#100,000'
                    value={amount}
                    onChangeText={handleAmountChange}
                    keyboardType='numeric'
                />

                <CustomInput 
                    label='Narration'
                    placeholder='...............'
                    value={narration}
                    onChangeText={setNarration}
                />

                <View style={{marginTop: 25, gap: 20}}>
                    <CustomButton 
                        onPress={handleSplitPayment}
                        style={{backgroundColor: 'white', borderWidth: 2, borderColor: "#1A35BD"}}
                        title='Split Payment'
                        textStyle={{color: '#000000', fontSize: 18, fontWeight: "600", fontFamily: "intersemibold"}}
                    />

                    <CustomButton
                        onPress={goToPay}
                        title='Pay'
                        textStyle={{fontSize: 18, fontWeight: "600", fontFamily: "intersemibold"}}
                    />
                </View>
            </View>
        </ScrollView>

        <SplitPaymentModal 
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
        />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1
    },
    scrollContent: {
        flexGrow: 1
    },
    container: {
        paddingHorizontal: 16
    }
})