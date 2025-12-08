import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'
import SmallButton from '@/components/CustomButton/SmallButton'

export default function Loginpin() {
    const [pin, setPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')

    const router = useRouter()
    
    const goBack = () => {
        router.back()
    }

    const handleNext = () => {
        if (pin.length !== 6) {
            Alert.alert('Error', 'Please enter a 6-digit PIN')
            return
        }
        if (confirmPin.length !== 6) {
            Alert.alert('Error', 'Please confirm your PIN')
            return
        }
        if (pin !== confirmPin) {
            Alert.alert('Error', 'PINs do not match. Please try again.')
            return
        }
        // Navigate to next screen or save PIN
        console.log('PIN set successfully:', pin)
        router.push('/transactionpin')
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
                            <Text style={styles.title}>Set Your 6-Digit Login PIN</Text>
                            <Text style={styles.desc}>Your PIN should contain numbers which cannot be repeated or consecutive</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Set PIN</Text>
                            <OtpInput
                                numberOfDigits={6}
                                onTextChange={setPin}
                                placeholder="•"
                                value={pin}
                                theme={{
                                    containerStyle: styles.otpContainer,
                                    pinCodeContainerStyle: styles.pinCodeContainer,
                                    pinCodeTextStyle: styles.pinCodeText,
                                    focusStickStyle: styles.focusStick,
                                }}
                            />

                            <Text style={styles.label}>Confirm PIN</Text>
                            <OtpInput
                                numberOfDigits={6}
                                onTextChange={setConfirmPin}
                                 placeholder="•"
                                value={confirmPin}
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
        fontSize: 18,
        color: '#000000',
        paddingHorizontal: 20
    },
    inputContainer: {
        marginTop: 40
    },
    label: {
        fontSize: 18,
        fontFamily: 'interregular',
        fontWeight: '400',
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
    buttonContainer:{
        marginTop:30,
        alignItems: 'center'

    },

    
})