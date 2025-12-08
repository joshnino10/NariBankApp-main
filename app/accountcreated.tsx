import AccountGenerated from '@/components/AccountCreated/AccountGenerated'
import SmallButton from '@/components/CustomButton/SmallButton'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Animated, Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

const { height } = Dimensions.get('window')

export default function AccountCreated(): React.ReactElement {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const goTohome = () => {
    setIsLoading(true)
    router.replace('/(tabs)/home')
  }

  const bounceAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(bounceAnim, {
            toValue: -20,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(bounceAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start()
  }, [bounceAnim, scaleAnim])

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.page}>
        <View style={styles.container}>
          <Animated.Image
            accessible
            accessibilityLabel="Account creation success icon"
            style={[
              styles.icon,
              {
                transform: [
                  { translateY: bounceAnim },
                  { scale: scaleAnim },
                ],
              },
            ]}
            source={require('../assets/images/account success.png')}
          />
          <Text style={styles.title}>You’ve successfully created an account !</Text>
        </View>

        <View>
          <AccountGenerated />
        </View>

        <View style={styles.buttonContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : (
            <SmallButton
              onPress={goTohome}
              title="Start Nari"
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  page: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  icon: {
    width: 150,
    height: 150,
  },
  container: {
    alignItems: 'center',
    marginTop: height * 0.12,
    gap: 50,
  },
  title: {
    fontFamily: 'interregular',
    textAlign: 'center',
    color: '#777777',
    fontSize: 18,
  },
  buttonContainer: {
    marginBottom: 30,
    alignSelf: 'center',
  },

})