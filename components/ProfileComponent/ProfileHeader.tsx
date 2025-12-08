import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function ProfileHeader() {
  const [profileImage, setProfileImage] = useState(require('../../assets/images/bigProfileImage.png'))

  const goBack = () => {
    router.push('/(tabs)/home')
  }

  const handleImagePick = async () => {
    // Request permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access camera roll is required!')
      return
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri })
    }
  }

  const AccountName = 'PETER SWIFT'

  return (
    <>
      <StatusBar style="light" backgroundColor="#1A35BD" />
      <SafeAreaView style={styles.safearea} edges={['top']}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={goBack}
              accessibilityLabel="Go back"
              accessibilityRole="button"
            >
              <Image 
                style={styles.icon} 
                source={require('../../assets/images/arrowBackWhite.png')}
              />
            </TouchableOpacity>
            <Text style={styles.profileText}>Profile</Text>
            <View style={styles.icon} />
          </View>

          <View style={styles.profileImageContainer}>
            <View style={styles.imageCircle}>
              <TouchableOpacity 
                onPress={handleImagePick}
                accessibilityLabel="Change profile picture"
                accessibilityRole="imagebutton"
              >
                <Image 
                  style={styles.profileImage}
                  source={profileImage}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.accountName}>{AccountName}</Text>
            <Pressable 
              accessibilityLabel="Show account details"
              accessibilityRole="button"
            >
              <Text style={styles.showDetails}>Show Details</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#1A35BD',
  },
  content: {
    paddingHorizontal: 16,
    marginBottom: 20
  },
  icon: {
    width: 20,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  profileText: {
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    fontSize: 20
  },
  imageCircle: {
    width: 120,
    height: 120,
    borderColor: '#E8EBF8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60
  },
  profileImageContainer: {
    alignSelf: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  accountName: {
    marginTop: 10,
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  showDetails: {
    marginTop: 15,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})