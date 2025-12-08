import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeHeader() {
  const Name = 'Joshua';
  const router = useRouter();

  const goToProfile = () => {
    router.push('/(tabs)/profile');
  };
  
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.userSection}>
              <TouchableOpacity onPress={goToProfile}>
                <Image 
                  style={styles.profileImage} 
                  source={require('../../assets/images/headerimage.png')}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.greetingText}>Good day,</Text>
                <Text style={styles.nameText}>{Name}</Text>
              </View>
            </View>

            <View style={styles.rightSection}>
              <View style={styles.logoContainer}>
                <Image 
                  style={styles.logoImage} 
                  source={require('../../assets/images/small logo.png')}
                />
                <Text style={styles.logoText}>Nari</Text>
              </View>

              <TouchableOpacity>
                <Image 
                  style={styles.icon}
                  source={require('../../assets/images/scanline.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image 
                  style={styles.icon}
                  source={require('../../assets/images/notification.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: 16,
    fontFamily: 'intermedium',
    color: '#1E1E1E',
    fontWeight: "500"
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'interbold',
    fontWeight: '700',
    color: '#1E1E1E',
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 16,
    fontFamily: 'ArchivoBlack',
  },
  icon: {
    width: 24,
    height: 24,
  },
});