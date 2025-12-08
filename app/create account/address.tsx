import { 
  Image, 
  Platform, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  Alert, 
  ScrollView, 
  KeyboardAvoidingView,
  Modal,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '@/components/CustomButton/CustomButton'
import { useRouter } from 'expo-router'
import CustomInput from '@/components/CustomInput/CustomInput'
import { Ionicons } from '@expo/vector-icons'

// Nigerian States and LGAs data
const nigerianStates = [
  { id: 1, name: 'Lagos', lgas: ['Alimosho', 'Ajeromi-Ifelodun', 'Epe', 'Ikorodu', 'Mainland', 'Ikeja', 'Lagos Island', 'Shomolu'] },
  { id: 2, name: 'Abuja', lgas: ['Abuja Municipal', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali'] },
  { id: 3, name: 'Kano', lgas: ['Kano Municipal', 'Dambatta', 'Garun Mallam', 'Kura', 'Nassarawa'] },
  { id: 4, name: 'Oyo', lgas: ['Ibadan', 'Oyo', 'Ogbomosho', 'Saki', 'Ibarapa'] },
  { id: 5, name: 'Enugu', lgas: ['Enugu', 'Nsukka', 'Nssit Ubium', 'Oji River'] },
 
]

export default function Address() {
  const [state, setState] = useState('')
  const [LGA, setLGA] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  const [showStatePicker, setShowStatePicker] = useState(false)
  const [showLGAPicker, setShowLGAPicker] = useState(false)
  const [availableLGAs, setAvailableLGAs] = useState<string[]>([])

  const router = useRouter()

  const goback = () => {
    router.back()
  }

  const handleStateSelect = (selectedState: string) => {
    setState(selectedState)
    setLGA('') // Reset LGA when state changes
    
    // Get LGAs for selected state
    const stateData = nigerianStates.find(s => s.name === selectedState)
    setAvailableLGAs(stateData?.lgas || [])
    setShowStatePicker(false)
  }

  const handleLGASelect = (selectedLGA: string) => {
    setLGA(selectedLGA)
    setShowLGAPicker(false)
  }

  const handleNext = () => {
    if (!state || !LGA || !houseNumber || !streetName) {
      Alert.alert("Incomplete Details", "Please fill in all fields before continuing.")
      return
    }
    router.push('/create account/nationality')
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <View style={styles.page}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity onPress={goback}>
              <Image 
                style={styles.back} 
                source={require('../../assets/images/arrowBack.png')}
              />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>What’s your Residential Address?</Text>
              <Text style={styles.description}>
                Kindly provide your complete residential address
              </Text>
            </View>

            {/* State Picker */}
            <View>
              <Text style={styles.label}>State</Text>
              <TouchableOpacity 
                style={styles.pickerButton}
                onPress={() => setShowStatePicker(true)}
              >
                <Text style={state ? styles.pickerText : styles.placeholderText}>
                  {state || 'Select state'}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#9A9A9A" />
              </TouchableOpacity>
            </View>

            {/* LGA Picker */}
            <View>
              <Text style={styles.label}>L.G.A</Text>
              <TouchableOpacity 
                style={[styles.pickerButton, !state && styles.disabledPicker]}
                onPress={() => state && setShowLGAPicker(true)}
                disabled={!state}
              >
                <Text style={LGA ? styles.pickerText : styles.placeholderText}>
                  {LGA || (state ? 'Select L.G.A' : 'Select state first')}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#9A9A9A" />
              </TouchableOpacity>
            </View>

            <CustomInput 
              label='House Number'
              placeholder='Input house number'
              placeholderTextColor="#9A9A9A"
              value={houseNumber}
              onChangeText={setHouseNumber}
            />

            <CustomInput 
              label='Street Name'
              placeholder='Input street name'
              placeholderTextColor="#9A9A9A"
              value={streetName}
              onChangeText={setStreetName}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      {/* Fixed button at bottom */}
      <View style={styles.footer}>
        <CustomButton title='Next' onPress={handleNext} />
      </View>

      {/* State Picker Modal */}
      <Modal
        visible={showStatePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowStatePicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select State</Text>
              <TouchableOpacity onPress={() => setShowStatePicker(false)}>
                <Ionicons name="close" size={28} color="#000" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={nigerianStates}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.optionButton}
                  onPress={() => handleStateSelect(item.name)}
                >
                  <Text style={styles.optionText}>{item.name}</Text>
                  {state === item.name && (
                    <Ionicons name="checkmark" size={24} color="#1A35BD" />
                  )}
                </TouchableOpacity>
              )}
              scrollEnabled={true}
              nestedScrollEnabled={true}
            />
          </View>
        </View>
      </Modal>

      {/* LGA Picker Modal */}
      <Modal
        visible={showLGAPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowLGAPicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select L.G.A</Text>
              <TouchableOpacity onPress={() => setShowLGAPicker(false)}>
                <Ionicons name="close" size={28} color="#000" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={availableLGAs.map((lga, index) => ({ id: index, name: lga }))}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.optionButton}
                  onPress={() => handleLGASelect(item.name)}
                >
                  <Text style={styles.optionText}>{item.name}</Text>
                  {LGA === item.name && (
                    <Ionicons name="checkmark" size={24} color="#1A35BD" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  page: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  scrollContent: {
    paddingBottom: 20
  },
  back: {
    width: 20,
    height: 40,
    marginTop: 10
  },
  titleContainer: {
    marginTop: 30,
    gap: 20
  },

  title: {
    fontFamily: 'intersemibold',
    fontWeight: '600',
    fontSize: 20,
    color: '#000000'
  },
  description: {
    fontFamily: 'interregular',
    fontSize: 18,
    color: '#000000',
    fontWeight: "400"
  },

  label: {
    fontSize: 18,
    fontFamily:"interregular",
    color: "#000000",
    marginBottom: 8,
    marginTop: 20
  },

  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height:60,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
  },
  disabledPicker: {
    opacity: 0.6,
    backgroundColor: '#f0f0f0'
  },
  pickerText: {
    fontFamily: 'interregular',
    fontSize: 16,
    color: '#000000',
    flex: 1
  },
  placeholderText: {
    fontFamily: 'interregular',
    fontSize: 16,
    color: '#9A9A9A',
    flex: 1
  },
  footer: {
    paddingHorizontal: 16
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingBottom: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  modalTitle: {
    fontFamily: 'intersemibold',
    fontSize: 18,
    fontWeight: '600',
    color: '#000000'
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  optionText: {
    fontFamily: 'interregular',
    fontSize: 16,
    color: '#000000'
  }
})