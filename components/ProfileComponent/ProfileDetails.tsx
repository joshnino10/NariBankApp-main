import { router } from 'expo-router'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'

export default function ProfileDetails() {
  const sections = [
    {
      id: '1',
      icon: require('../../assets/images/transfer pin icon.png'),
      text: 'Change Transfer PIN',
      route: '/profile/changepin'
    },
    {
      id: '2',
      icon: require('../../assets/images/home page setting icon.png'),
      text: 'Homepage Setting',
      route: '/profile/homesetting'
    }, 
    {
      id: '3',
      icon: require('../../assets/images/theme icon.png'),
      text: 'Theme',
      route: '/profile/theme'
    },
    {
      id: '4',
      icon: require('../../assets/images/about icon.png'),
      text: 'About',
      route: '/profile/about'
    },
    {
      id: '5', 
      icon: require('../../assets/images/security icon.png'),
      text: 'Security Questions',
      route: '/profile/security'
    },
    {
      id: '6',
      icon: require('../../assets/images/transaction icon.png'),
      text: 'Transaction Limits',
      route: '/profile/transactionlimits'
    }
  ]

  const handleNavigation = (route: string) => {
    router.push(route as any)
  }

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...')
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sections.map((item) => (
          <View style={styles.content} key={item.id}>
            <TouchableOpacity 
              style={styles.sections}
              onPress={() => handleNavigation(item.route)}
              accessibilityLabel={`Navigate to ${item.text}`}
              accessibilityRole="button"
            >
              <View style={styles.leftContent}>
                <Image style={styles.logo} source={item.icon} />   
                <Text style={styles.text}>{item.text}</Text>               
              </View>

              <Image 
                source={require('../../assets/images/arrow right icon.png')} 
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        ))}

        <CustomButton 
          textStyle={styles.logoutText}
          style={styles.logoutButton} 
          title='Log out'
          onPress={handleLogout}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  content: {
    marginVertical: 20
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  leftContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },

  icon: {
    width: 20,
    height: 20
  },

  logo: {
    width: 30,
    height: 30
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#000000'
  },
  logoutButton: {
    backgroundColor: '#B8C0EB',
    marginTop: 10
  },
  logoutText: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1E1E1E'
  }
})