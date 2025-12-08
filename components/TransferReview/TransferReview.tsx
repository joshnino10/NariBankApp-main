import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { transferreview } from './TransferReview1'
import CustomButton from '../CustomButton/CustomButton'
import { Ionicons } from '@expo/vector-icons'
import PinEntryModal from './TransferPin'

export default function TransferReview() {
    const [showPinModal, setShowPinModal] = useState(false)

    const enterPin = () => {
        setShowPinModal(true)
    }

    const handlePinComplete = (pin: string) => {
        console.log('PIN entered:', pin)
        setShowPinModal(false)
        // Navigate to success screen or process payment
        // router.push('/nari bank/success')
    }

    const handleCloseModal = () => {
        setShowPinModal(false)
    }

    return (
        <View style={styles.container}>
            {transferreview.map((item) => (
                <View key={item.id} style={styles.contents}>
                    <View style={styles.row}>
                        <Text style={styles.label}>From:</Text>
                        <View style={styles.bankLogosContainer}>
                            <Image source={item.bankLogo1} style={styles.banklogo}/>
                            <Image source={item.bankLogo2} style={styles.banklogo}/>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>To:</Text>
                        <View style={styles.toSection}>
                            <View style={styles.accountHeader}>
                                <Image style={styles.banklogo} source={item.AccountLogo}/>
                                <Text style={styles.accountnumber}>{item.AccountNumber}</Text>
                            </View>
                            <Text style={styles.accountname}>({item.AccountName})</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Amount:</Text>
                        <View style={styles.amountContainer}>
                            <Image 
                                style={styles.nairaLogo} 
                                source={require('../../assets/images/nairaicon.png')}
                            /> 
                            <Text style={styles.amount}>{item.Amount}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Transaction fee:</Text>
                        <View style={styles.amountContainer}>
                            <Image 
                                style={styles.nairaLogo} 
                                source={require('../../assets/images/nairaicon.png')}
                            /> 
                            <Text style={styles.amount}>{item.TransferFee}</Text>
                        </View>
                    </View>
                </View>     
            ))}

            <View style={styles.buttonContainer}>
                <CustomButton
                    onPress={enterPin}
                    title='Pay'
                    textStyle={{
                        fontFamily: 'intersemibold', 
                        fontSize: 20, 
                        fontWeight: "600"
                    }}
                    style={styles.payButton}
                />
                
                <TouchableOpacity 
                    style={styles.fingerprintButton}
                    onPress={enterPin}
                >
                    <Ionicons name="finger-print" size={32} color="#fff" />
                </TouchableOpacity>
            </View>

            <PinEntryModal 
                visible={showPinModal}
                onClose={handleCloseModal}
                onComplete={handlePinComplete}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    label: {
        fontFamily: 'interregular',
        fontSize: 20,
        fontWeight: '400',
        color: '#000000'
    },
    banklogo: {
        width: 40,
        height: 40,
        borderRadius: 6
    },
    contents: {
        gap: 25
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bankLogosContainer: {
        flexDirection: 'row', 
        gap: 5
    },
    toSection: {
        alignItems: 'flex-end',
        gap: 4
    },
    accountHeader: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 8
    },
    accountname: {
        fontFamily: 'interregular',
        fontSize: 14,
        fontWeight: '400',
        color: '#000000'
    },
    accountnumber: {
        fontFamily: 'interregular',
        fontSize: 20,
        fontWeight: "400",
        color: '#000000'
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    amount: {
        fontFamily: "interregular",
        color: "#000000",
        fontSize: 20,
        fontWeight: '400',
    },
    nairaLogo: {
        tintColor: 'black',
        width: 20,
        height: 20
    },
    buttonContainer: {
        marginTop: 70,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    payButton: {
        flex: 1
    },
    fingerprintButton: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#1A35BD',
        justifyContent: 'center',
        alignItems: 'center'
    }
})