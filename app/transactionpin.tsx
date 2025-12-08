import SmallButton from '@/components/CustomButton/SmallButton'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, Keyboard, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'

export default function Transactionpin() {
    const [transactionpin, setTransactionPin] = useState('')
    const [confirmTransactionPin, setConfirmTransactionPin] = useState('')

    const router = useRouter()
    
    const goBack = () => {
        router.back()
    }

    const handleNext = () => {
        if (transactionpin.length !== 4) {
            Alert.alert('Error', 'Please enter a 4-digit PIN')
            return
        }
        if (confirmTransactionPin.length !== 4) {
            Alert.alert('Error', 'Please confirm your PIN')
            return
        }
        if (transactionpin !== confirmTransactionPin) {
            Alert.alert('Error', 'PINs do not match. Please try again.')
            return
        }
        // Navigate to next screen or save PIN
        console.log('PIN set successfully:', transactionpin)
        router.replace('/accountcreated')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.safearea}>
                <View style={styles.page}>
                    <View>
                        <TouchableOpacity onPress={goBack}>
                            <Image style={styles.back} source={require('../assets/images/arrowBack.png')}/>
                        </TouchableOpacity>

                        <View style={styles.titlecontainer}>
                            <Text style={styles.title}>Set Transaction PIN</Text>
                            <Text style={styles.desc}>Your 4-digit transaction PIN secures your transaction. Please do not share with anyone</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Set PIN</Text>
                            <OtpInput
                                numberOfDigits={4}
                                onTextChange={setTransactionPin}
                                value = {transactionpin}
                                placeholder="•"
                                secureTextEntry={true}
                                theme={{
                                    containerStyle: styles.otpContainer,
                                    pinCodeContainerStyle: styles.pinCodeContainer,
                                    pinCodeTextStyle: styles.pinCodeText,
                                    focusStickStyle: styles.focusStick,
                                }}
                            />

                            <Text style={styles.label}>Confirm PIN</Text>
                            <OtpInput
                                numberOfDigits={4}
                                onTextChange={setConfirmTransactionPin}
                                placeholder="•"
                                value = {confirmTransactionPin}
                                secureTextEntry={true}
                                theme={{
                                    containerStyle: styles.otpContainer,
                                    pinCodeContainerStyle: styles.pinCodeContainer,
                                    pinCodeTextStyle: styles.pinCodeText,
                                    focusStickStyle: styles.focusStick,
                                }}
                            />
                        </View>

                    <View style={styles.buttonContainer}>
                        <SmallButton onPress={handleNext} title='Next'/>
                    </View>
                    </View>


                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    page: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    back: {
        width: 20,
        height: 40
    },
    titlecontainer: {
        marginTop: 30,
        gap: 20
    },
    title: {
        fontFamily: 'intersemibold',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000'
    },
    desc: {
        fontFamily: 'interregular',
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        paddingHorizontal: 20
    },
    inputContainer: {
        marginTop: 40
    },
    label: {
        fontSize: 16,
        fontFamily: 'interregular',
        fontWeight: '500',
        color: '#000000',
        marginBottom: 10,
        marginTop: 20
    },
    otpContainer: {
        marginVertical: 10
    },
    pinCodeContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#F7F7F7',
        borderWidth: 0
    },
    pinCodeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    focusStick: {
        backgroundColor: '#4361EE'
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
})