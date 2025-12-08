import CustomSplashScreen1 from "@/components/CustomSplashScreen1/CustomSplashScreen1";
import CustomSplashScreen2 from "@/components/CustomSplashScreen2/CustomSplashScreen2";
import { GlobalProvider } from '@/context/GlobalContext';
import { ArchivoBlack_400Regular, } from "@expo-google-fonts/archivo-black";
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [currentSplash, setCurrentSplash] = useState(1);

  const [loaded, error] = useFonts({
    interthin: Inter_100Thin,
    interextralight: Inter_200ExtraLight,
    interlight: Inter_300Light,
    intermedium: Inter_500Medium,
    interregular: Inter_400Regular,
    interbold: Inter_700Bold,
    intersemibold: Inter_600SemiBold,
    interextrabold: Inter_800ExtraBold,
    ArchivoBlack: ArchivoBlack_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]); 

  useEffect(() => {
    if (loaded) {
      const timer1 = setTimeout(() => setCurrentSplash(2), 2500);
      const timer2 = setTimeout(() => setCurrentSplash(0), 6000);


      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  if (currentSplash === 1) {
    return <CustomSplashScreen1 />;
  }

  if (currentSplash === 2) {
    return <CustomSplashScreen2 />;
  }
  
  return (
    <GlobalProvider>
     <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="createaccount" />
      <Stack.Screen name="verifyemail" />
      <Stack.Screen name="enterid" />
      <Stack.Screen name="verifyphoto" />
      <Stack.Screen name="verifyphoto2" />
      <Stack.Screen name="address" />
      <Stack.Screen name="nationality" />
      <Stack.Screen name="loginpin" />
      <Stack.Screen name="transactionpin" />
      <Stack.Screen name="accountcreated" options={{gestureEnabled:false}} />
      <Stack.Screen name="addcard" />
    </Stack>
    </GlobalProvider>
  );
}