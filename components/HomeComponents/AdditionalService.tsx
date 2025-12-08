import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Service {
  id: string
  icon: any
  text: string
  route: string
  isVisible: boolean
}

export default function AdditionalService() {
  const [showAll, setShowAll] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      icon: require('../../assets/images/to nari icon.png'),
      text: 'To Nari',
      route: '/nari bank',
      isVisible: true,
    },

    {
      id: '2',
      icon: require('../../assets/images/bank icon.png'),
      text: 'To Bank',
      route: '/to bank/bank',
      isVisible: true,
    },
    {
      id: '3',
      icon: require('../../assets/images/bills icon.png'),
      text: 'Bills',
      route: '/bills/bills',
      isVisible: true,
    },
    {
      id: '4',
      icon: require('../../assets/images/wallet icon.png'),
      text: "Int'l\nWallet",
      route: '/wallet/wallet',
      isVisible: true,
    },
    {
      id: '5',
      icon: require('../../assets/images/mobile icon.png'),
      text: 'Mobile\nTopup',
      route: '/mobile-topup/topup',
      isVisible: true,
    },
    {
      id: '6',
      icon: require('../../assets/images/sports icon.png'),
      text: 'Sports',
      route: '/sport/sports',
      isVisible: true,
    },
    {
      id: '7',
      icon: require('../../assets/images/tv icon.png'),
      text: 'TV',
      route: '/tv/tv',
      isVisible: true,
    },
    {
      id: '8',
      icon: require('../../assets/images/kolo icon.png'),
      text: 'Kolo',
      route: '/kolo/kolo',
      isVisible: true,
    },
    {
      id: '9',
      icon: require('../../assets/images/kolo icon.png'),
      text: 'Savings',
      route: '/savings/savings',
      isVisible: true,
    },
  ])

  const visibleServices = services.filter(service => service.isVisible)
  const displayedServices = showAll ? visibleServices : visibleServices.slice(0, 8)

  const handleServicePress = (route: string) => {
    if (isEditMode) return
    router.push(route as any)
  }

  const toggleServiceVisibility = (id: string) => {
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === id ? { ...service, isVisible: !service.isVisible } : service
      )
    )
  }

  const handleEditPress = () => {
    setIsEditMode(!isEditMode)
    if (isEditMode) {
      Alert.alert('Success', 'Services updated successfully!')
    }
  }

  return (
    <View>
      {/* Edit Button */}
      <TouchableOpacity 
        style={styles.editButtonContainer}
        onPress={handleEditPress}
        activeOpacity={0.7}
      >
        <Image 
          style={styles.editIcon} 
          source={require('../../assets/images/edit icon.png')}
        />
        <Text style={styles.editButtonText}>{isEditMode ? 'Done' : 'Edit'}</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Services Grid */}
        <View style={styles.gridContainer}>
          {displayedServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceButton}
              onPress={() => handleServicePress(service.route)}
              activeOpacity={isEditMode ? 1 : 0.7}
            >
              <View style={[
                styles.iconContainer,
                isEditMode && styles.iconContainerEdit
              ]}>
                <Image 
                  source={service.icon} 
                  style={styles.icon}
                  resizeMode="contain"
                />
                {isEditMode && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => toggleServiceVisibility(service.id)}
                    activeOpacity={0.7}
                  >
                    <Feather name="x" size={14} color="#fff" />
                  </TouchableOpacity>
                )}
              </View>
              <Text numberOfLines={2} style={styles.serviceText}>{service.text}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hidden Services (only in edit mode) */}
        {isEditMode && services.filter(s => !s.isVisible).length > 0 && (
          <>
            <View style={styles.divider} />
            <Text style={styles.hiddenTitle}>Hidden Services</Text>
            <View style={styles.gridContainer}>
              {services.filter(s => !s.isVisible).map((service) => (
                <TouchableOpacity
                  key={service.id}
                  style={styles.serviceButton}
                  onPress={() => toggleServiceVisibility(service.id)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.iconContainer, styles.hiddenIconContainer]}>
                    <Image 
                      source={service.icon} 
                      style={[styles.icon, styles.hiddenIcon]}
                      resizeMode="contain"
                    />
                    <View style={styles.addButton}>
                      <Feather name="plus" size={14} color="#fff" />
                    </View>
                  </View>
                  <Text numberOfLines={2} style={[styles.serviceText, styles.hiddenText]}>
                    {service.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {/* Show All Button */}
        {!isEditMode && visibleServices.length > 8 && (
          <TouchableOpacity 
            style={styles.showAllButton}
            onPress={() => setShowAll(!showAll)}
            activeOpacity={0.7}
          >
            <Text style={styles.showAllText}>
              {showAll ? 'Show less' : 'Show all'}
            </Text>
            <Feather 
              name={showAll ? "chevron-up" : "chevron-down"} 
              size={24} 
              color="#1830AC" 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  editButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
    gap: 6,
  },
  editIcon: {
    width: 22,
    height: 22,
  },
  editButtonText: {
    fontFamily: 'intermedium',
    fontSize: 14,
    color: '#1830AC',
    fontWeight: '500',
  },
  container: {
    backgroundColor: '#E8EBF8',
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  serviceButton: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#96A2E1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#1A35BDE5',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 0,
    elevation: 4,
    position: 'relative',
  },
  iconContainerEdit: {
    borderWidth: 2,
    borderColor: '#1830AC',
    borderStyle: 'dashed',
  },
  icon: {
    width: 24,
    height: 24,
  },
  removeButton: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  serviceText: {
    fontFamily: 'intermedium',
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#96A2E1',
    marginVertical: 16,
  },
  hiddenTitle: {
    fontFamily: 'intersemibold',
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 12,
  },
  hiddenIconContainer: {
    opacity: 0.5,
  },
  hiddenIcon: {
    opacity: 0.6,
  },
  hiddenText: {
    color: '#666666',
  },
  showAllButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showAllText: {
    fontFamily: 'intersemibold',
    fontSize: 15,
    color: '#1830AC',
    fontWeight: '600',
    marginRight: 6,
  },
})