import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function VerifyPhoto() {
  const router = useRouter();

  const goBack = () => {
    router.back();

  
  };
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.page}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image
              style={styles.back}
              source={require("../../assets/images/arrowBack.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.faceIdContainer}>
          <Image
            style={styles.faceId}
            source={require("../../assets/images/FaceID.png")}
          />
          <Text style={styles.title}>Photo Verification</Text>
          <Text style={styles.description}>
            Your face needs to be verified against your NIN information. Please
            follow the guidelines below to ensure proper capture.
          </Text>
        </View>

        <View style={styles.contents}>
          <Text style={styles.kindlyText}>Kindly ...</Text>

          <View style={styles.container}>
            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/iconfaceid.png")}
              />
              <Text style={styles.infomessage}>
                Put your face inside the frame
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/lighticon.png")}
              />
              <Text style={styles.infomessage}>
                Stay in an environment with bright light
              </Text>
            </View>

            <View style={styles.row}>
              <Image
                style={styles.icon}
                source={require("../../assets/images/removeicon.png")}
              />
              <Text style={styles.infomessage}>Remove any face coverings</Text>
            </View>
          </View>
        </View>

        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={()=> router.push('/create account/verifyphoto2')} >
                <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  page: {
    paddingHorizontal: 16,
  },

  back: {
    width: 20,
    height: 40,
  },
  faceId: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  faceIdContainer: {
    marginTop: 30,
    gap: 30,
  },
  title: {
    fontFamily: "ArchivoBlack",
    textAlign: "center",
    fontSize: 26,
    color: "#000000",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "interregular",
  },
  contents: {
    marginTop: 40,
    backgroundColor: "#F3F3F3",
    padding: 20,
    borderRadius:10
  },

  kindlyText: {
    fontSize: 16,
    fontFamily: "intermedium",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    marginTop: 20,
  },

  infomessage: {
    fontFamily: "interregular",
    fontSize: 16,
    color: "#000000",
    fontWeight: "400",
  },

  btnContainer:{
    alignSelf: 'center',
    marginTop: 40,


  },
  btn:{
    backgroundColor: '#1A35BD',
    width: 266,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8

  },

  btnText:{
    color: '#FFFFFF',
    fontFamily: 'intermedium',
    fontSize: 20

  },
});
