import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface PinEntryModalProps {
  visible: boolean
  onClose: () => void
  onComplete: (pin: string) => void
}

export default function PinEntryModal({ visible, onClose, onComplete }: PinEntryModalProps) {
  const [pin, setPin] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const verifyPin = async (enteredPin: string) => {
    // ⏳ Simulate API delay
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        // ✅ Change "1234" to your real validation logic
        if (enteredPin === '1234') {
          resolve({ success: true })
        } else {
          resolve({ success: false })
        }
      }, 2000)
    })
  }

  const handleNumberPress = (num: string) => {
    if (pin.length < 4 && !loading) {
      const newPin = pin + num
      setPin(newPin)
      
      if (newPin.length === 4) {
        setLoading(true)
        verifyPin(newPin).then((res) => {
          onComplete(newPin)
          setPin('')
          setLoading(false)
          if (res.success) {
            router.replace('/nari bank/success') // ✅ Go to success screen
          } else {
            router.replace('/nari bank/error') // ❌ Go to error screen
          }
        })
      }
    }
  }

  const handleDelete = () => {
    if (!loading) setPin(pin.slice(0, -1))
  }

  const handleClose = () => {
    setPin('')
    setLoading(false)
    onClose()
  }

  const NumberButton = ({ number }: { number: string }) => (
    <TouchableOpacity
      style={[styles.key, loading && { opacity: 0.5 }]}
      onPress={() => handleNumberPress(number)}
      activeOpacity={0.7}
      disabled={loading}
    >
      <Text style={styles.keyText}>{number}</Text>
    </TouchableOpacity>
  )

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Enter Payment PIN</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <FontAwesome name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* PIN Dots */}
          <View style={styles.dotsContainer}>
            {[0, 1, 2, 3].map((index) => (
              <View key={index} style={styles.dotWrapper}>
                <View
                  style={[
                    styles.dot,
                    pin.length > index && styles.dotFilled
                  ]}
                />
              </View>
            ))}
          </View>

          {/* ✅ Loading Indicator */}
          {loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#1E1E1E" />
              <Text style={styles.loadingText}>Verifying PIN...</Text>
            </View>
          )}

          {/* Keypad */}
          {!loading && (
            <View style={styles.keypadWrapper}>
              <View style={styles.keypad}>
                {/* Row 1 */}
                <View style={styles.row}>
                  <NumberButton number="1" />
                  <NumberButton number="2" />
                  <NumberButton number="3" />
                </View>

                {/* Row 2 */}
                <View style={styles.row}>
                  <NumberButton number="4" />
                  <NumberButton number="5" />
                  <NumberButton number="6" />
                </View>

                {/* Row 3 */}
                <View style={styles.row}>
                  <NumberButton number="7" />
                  <NumberButton number="8" />
                  <NumberButton number="9" />
                </View>

                {/* Row 4 */}
                <View style={styles.row}>
                  <View style={styles.emptyKey} />
                  <NumberButton number="0" />
                  <TouchableOpacity
                    style={styles.deleteKey}
                    onPress={handleDelete}
                    activeOpacity={0.7}
                  >
                    <Feather name="delete" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    width: '100%',
    maxWidth: 450,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    fontFamily:'intersemibold',
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    padding: 4,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 20,
    paddingVertical: 20,
  },
  dotWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
  },
  dotFilled: {
    backgroundColor: '#1E1E1E',
  },
  loaderContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#1E1E1E',
    fontWeight: '500',
  },
  keypadWrapper: {
    backgroundColor: '#B8C0EB',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  keypad: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  key: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#1E1E1E',
  },
  emptyKey: {
    flex: 1,
  },
  deleteKey: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
