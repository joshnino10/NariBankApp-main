import CustomButton from '@/components/CustomButton/CustomButton';
import CustomInput from '@/components/CustomInput/CustomInput';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EnterID() {
  const [selectedIdType, setSelectedIdType] = useState<'NIN' | 'BVN'>('NIN');
  const [idNumber, setIdNumber] = useState('');

  const router = useRouter()

  const goBack = ()=>{
    router.back()
  }

  const handleNext = () => {
    if (!idNumber) {
      alert(`Please enter your ${selectedIdType}`);
      return;
    }

    // Validate NIN (11 digits) or BVN (11 digits)
    if (idNumber.length !== 11) {
      alert(`${selectedIdType} must be 11 digits`);
      return;
    }

    console.log('ID Info:', { type: selectedIdType, number: idNumber });
    router.push('/create account/verifyphoto')
   
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header with Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image style={styles.back} source={require('../../assets/images/arrowBack.png')}/>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Text style={styles.title}>Enter your ID information</Text>
            <Text style={styles.subtitle}>
              Kindly provide your BVN/NIN to verify your account opening
            </Text>

            {/* ID Type Selection */}
            <View style={styles.idTypeContainer}>
              <Text style={styles.label}>ID Type</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    selectedIdType === 'NIN' && styles.typeButtonActive,
                  ]}
                  onPress={() => setSelectedIdType('NIN')}
                  activeOpacity={0.7}
                >
                  {selectedIdType === 'NIN' && (
                    <>
                      <View style={styles.topLeftCorner} />
                      <View style={styles.bottomRightCorner} />
                    </>
                  )}
                  <Text
                    style={[
                      styles.typeButtonText,
                      selectedIdType === 'NIN' && styles.typeButtonTextActive,
                    ]}
                  >
                    NIN
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.typeButton,
                    selectedIdType === 'BVN' && styles.typeButtonActive,
                  ]}
                  onPress={() => setSelectedIdType('BVN')}
                  activeOpacity={0.7}
                >
                  {selectedIdType === 'BVN' && (
                    <>
                      <View style={styles.topLeftCorner} />
                      <View style={styles.bottomRightCorner} />
                    </>
                  )}
                  <Text
                    style={[
                      styles.typeButtonText,
                      selectedIdType === 'BVN' && styles.typeButtonTextActive,
                    ]}
                  >
                    BVN
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ID Number Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>{selectedIdType}</Text>
              <CustomInput
                value={idNumber}
                onChangeText={setIdNumber}
                placeholder={`Enter your ${selectedIdType === 'NIN' ? 'National Identification Number' : 'Bank Verification Number'}`}
                placeholderTextColor="#CACACA"
                keyboardType="number-pad"
                maxLength={11}
              />

              <TouchableOpacity style={styles.forgotLink}>
                <Text style={styles.forgotText}>Forgot {selectedIdType}?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
      {/* Fixed Button at Bottom */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          onPress={handleNext}
          fullWidth
          disabled={idNumber.length !== 11}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
 
  back: {
    width: 20,
    height: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: "intersemibold",
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
    letterSpacing: 0,
  },
  subtitle: {
    fontFamily: "interregular",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 20,
    lineHeight: 22,
  },

  idTypeContainer: {
    marginTop: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },

  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },

  typeButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#F3F3F3',
    borderColor: '#E0E0E0',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  typeButtonActive: {
    backgroundColor: '#B8C0EB',
    borderWidth: 1.2,
    borderColor: '#1A35BD',
  },

  topLeftCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 30,
    borderTopColor: '#1A35BD',
    borderRightWidth: 30,
    borderRightColor: 'transparent',
  },

  bottomRightCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 30,
    borderBottomColor: '#1A35BD',
    borderLeftWidth: 30,
    borderLeftColor: 'transparent',
  },

  typeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    zIndex: 1,
  },
  typeButtonTextActive: {
    color: '#000000',
  },
  inputContainer: {
    marginTop: 20,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
   
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotText: {
    fontSize: 14,
    color: '#1A35BD',
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopColor: '#F0F0F0',
  },
});