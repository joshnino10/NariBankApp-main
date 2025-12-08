import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function VerifyPhoto2() {
  const router = useRouter();
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken:', photo?.uri);
      router.push('/create account/address');
    }
  };

  if (!permission) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.permissionText}>Loading camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionTitle}>Camera Permission Required</Text>
          <Text style={styles.permissionText}>
            We need your permission to show the camera
          </Text>
          <TouchableOpacity style={styles.grantBtn} onPress={requestPermission}>
            <Text style={styles.grantBtnText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.cameraOverlay}>
          {/* Header */}
          <View style={styles.cameraHeader}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Image
                style={styles.backIcon}
                source={require('../../assets/images/arrowBack.png')}
              />
            </TouchableOpacity>
          </View>

          {/* Instructions */}
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionTitle}>Please keep your face steady</Text>
          </View>

          {/* Circular face frame */}
          <View style={styles.faceFrameContainer}>
            <View style={styles.circularFrame}>
              <View style={styles.innerCircle} />
            </View>
          </View>

          {/* Capture Button */}
          <View style={styles.cameraFooter}>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  permissionTitle: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  permissionText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  grantBtn: {
    backgroundColor: '#1A35BD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  grantBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  cameraContainer: { flex: 1 },
  camera: { flex: 1 },

  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent', // ✅ Keep camera visible
  },

  cameraHeader: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: { width: 20, height: 20, tintColor: 'white' },

  instructionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  instructionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },

  faceFrameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularFrame: {
    width: 290,
    height: 290,
    borderRadius: 145,
    borderWidth: 4,
    borderColor: '#1A35BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },

  cameraFooter: {
    paddingBottom: 60,
    alignItems: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#1A35BD',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1A35BD',
  },
});
