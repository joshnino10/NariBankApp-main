import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

export default function SupportDetails() {
  const sections = [
    {
      id: '1',
      icon: require('../../assets/images/chat icon.png'),
      text: 'Chat with Customer Service',
      route: '/support/chat',
    },
    {
      id: '2',
      icon: require('../../assets/images/faq icon.png'),
      text: 'FAQs',
      route: '/support/faqs',
    },
    {
      id: '3',
      icon: require('../../assets/images/feedback icon.png'),
      text: 'Send Feedback',
      route: '/support/sendfeedback',
    },
    {
      id: '4',
      icon: require('../../assets/images/report icon.png'),
      text: 'Report an Issue',
      route: '/support/report',
    },
  ]

  const contactNumbers = [
    {
      id: '1',
      number: '0201345100-6',
      icon: require('../../assets/images/contact icon.png'),
    },
    {
      id: '2',
      number: '0800CALLNARI',
      icon: require('../../assets/images/contact icon.png'),
    },
  ]

  const socialMedia = [
    {
      id: '1',
      platform: 'X (Twitter)',
      handle: '@naribanking_',
      icon: require('../../assets/images/x icon.png'),
      url: 'https://twitter.com/naribanking_',
    },
    {
      id: '2',
      platform: 'Instagram',
      handle: '@naribanking_',
      icon: require('../../assets/images/Ig icon.png'),
      url: 'https://instagram.com/naribanking_',
    },
  ]

  const handleNavigation = (route: string) => {
    router.push(route as any)
  }

  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`)
  }

  const handleSocialMedia = (url: string) => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Menu Sections */}
        {sections.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.section}
            onPress={() => handleNavigation(item.route)}
            accessibilityLabel={`Navigate to ${item.text}`}
            accessibilityRole="button"
          >
            <View style={styles.leftContent}>
              <Image source={item.icon} style={styles.sectionIcon} />
              <Text style={styles.sectionText}>{item.text}</Text>
            </View>
            <Image
              source={require('../../assets/images/arrow right icon.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        ))}

        {/* Contact Numbers Section */}
        <View style={styles.divider} />
        
        {contactNumbers.map((contact) => (
          <TouchableOpacity
            key={contact.id}
            style={styles.section}
            onPress={() => handleCall(contact.number)}
            accessibilityLabel={`Call ${contact.number}`}
            accessibilityRole="button"
          >
            <View style={styles.leftContent}>
              <Image source={contact.icon} style={styles.sectionIcon} />
              <Text style={styles.sectionText}>{contact.number}</Text>
            </View>
          </TouchableOpacity>
        ))}

       
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Our Socials</Text>

        {socialMedia.map((social) => (
          <TouchableOpacity
            key={social.id}
            style={styles.section}
            onPress={() => handleSocialMedia(social.url)}
            accessibilityLabel={`Visit ${social.platform} at ${social.handle}`}
            accessibilityRole="button"
          >
            <View style={styles.leftContent}>
              <Image source={social.icon} style={styles.sectionIcon} />
              <Text style={styles.sectionText}>{social.handle}</Text>
            </View>
            <Image
              source={require('../../assets/images/arrow right icon.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 16,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  sectionIcon: {
    width: 30,
    height: 30
  },

  sectionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },

  arrowIcon: {
    width: 20,
    height: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8EBF8',
    marginVertical: 12,
  },

  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    backgroundColor: '#F3F3F3',
    paddingHorizontal:10,
    paddingVertical: 7,
    borderRadius:8,
    color: '#000000',
    marginTop: 8,
    marginBottom: 4,
  },
})