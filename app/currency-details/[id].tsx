import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { currrencyData } from '@/components/Int’l Wallet/CurrencyData';

export default function SingleCurrency() {

  const { id } = useLocalSearchParams<{ id: string }>();

  const Currency = currrencyData.find((currencyinfo) => currencyinfo.id === id);

  const router = useRouter();

  const goback = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goback}>
            <Image style={styles.icon} source={require('../../assets/images/arrowBack.png')} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Swap</Text>

          <View style={styles.icon} />
        </View>


        <View>
            <View>
                <Text>Rate</Text>
                <View>
                    <Image style={styles.flag} source={Currency?.Icon}/>
                </View>
            </View>
        </View>






      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  page: {
    paddingHorizontal: 16,
  },

  icon: {
    width: 20,
    height: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    fontFamily: 'intersemibold',
    fontWeight: '600',
    color: '#000000',
  },

  flag:{
    width:24,
    height:18
  }
});
