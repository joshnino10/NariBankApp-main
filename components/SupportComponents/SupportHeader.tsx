import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SupportHeader() {
    const router = useRouter()

    const goBack = () => {
        router.push('/(tabs)/home')
    }

    return (
        <>
            <StatusBar style="light" backgroundColor="#1A35BD" />
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={goBack}>
                        <Image 
                            style={styles.icon} 
                            source={require('../../assets/images/arrowBackWhite.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.text}>Support</Text>
                    <View style={styles.icon} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#1A35BD',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 30
    },
    icon: {
        width: 20,
        height: 40,
    },
    text: {
        fontFamily: "intersemibold",
        fontSize: 20,
        color: '#FFFFFF',
    },
})