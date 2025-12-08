import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import SmallButton from "../CustomButton/SmallButton";
import { splitPayment } from "./SplitDetails";

interface SplitPaymentModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SplitPaymentModal({ visible,onClose,}: SplitPaymentModalProps)
 
{
 const router = useRouter()
 const goToPay  = ()=> {
    onClose()
    router.push('/nari bank/review1')
 }
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <TouchableOpacity 
          style={styles.modalContainer} 
          activeOpacity={1} 
          onPress={(e) => e.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Banks</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.title}>Available balance</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            {splitPayment.map((item, index) => (
              <View key={index} style={styles.paymentItem}>
                <View style={styles.itemInfo}>
                  <Image style={styles.Bankicon} source={item.BankIcon} />
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center', gap:25}}>
                   <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                       <Image style={{width:20, height:20, tintColor:"#1E1E1E"}} source={require('../../assets/images/nairaicon.png')}/>
                        <Text style={styles.itemAmount}>{item.Amount}</Text>
                   </View>
                  <TouchableOpacity>
                    <Image
                    style={{width:20, height:20}}
                      source={require("../../assets/images/mdi_plus.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              
            ))}
          </ScrollView>
            <View style={styles.buttonContainer} >
                <SmallButton onPress={goToPay} title="Add" />
            </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    maxHeight: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingBottom:30,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 20,
    fontFamily:'intermedium',
    fontWeight: "500",
    paddingVertical:10,
    color: "#000000",
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 24,
    color: "#666",
  },
  content: {
    padding: 16,
  },
  paymentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical:20,
    borderBottomColor: "#f0f0f0",

  },
  itemInfo: {
    flex: 1,
    
  },

  Bankicon: {
    width: 56,
    height: 56,
  },


  itemAmount: {
    fontSize: 20,
    fontFamily:'intermedium',
    fontWeight: "500",
    color: "#000000",
   
  },

  buttonContainer:{
    marginTop:25,
    alignSelf:'center'
   
  }


});