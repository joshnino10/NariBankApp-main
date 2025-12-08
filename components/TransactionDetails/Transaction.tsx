// import { Feather } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { transactions } from './TransactionDetails'

export default function Transaction() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const displayedTransactions = isExpanded ? transactions : transactions.slice(0, 3)

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.header}
          onPress={() => setIsExpanded(!isExpanded)}
          activeOpacity={0.7}
        >
          <Text style={styles.text}>Recent Transaction</Text>
          <MaterialIcons 
            name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
            size={25} 
            color="black" 
          />
        </TouchableOpacity>

        <View style={styles.transactionList}>
          {displayedTransactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.leftContent}>
                <View style={[
                  styles.iconContainer,
                  { backgroundColor:'#B8C5F0' }
                ]}>
                  <Image 
                    source={transaction.icon} 
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                
                <View style={styles.textContainer}>
                  <Text style={styles.transactionTitle} numberOfLines={1}>
                    {transaction.title}
                  </Text>
                  <Text style={styles.transactionDate}>
                    {transaction.DateAndTime}
                  </Text>
                </View>
              </View>

              <Text style={[
                styles.amount,
                transaction.type === 'credit' ? styles.creditAmount : styles.debitAmount
              ]}>
                {transaction.type === 'debit' ? '−' : '+'} ₦{transaction.Amount}
              </Text>
            </View>
          ))}
        </View>

      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'intersemibold',
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
  },
  transactionList: {
    // gap: 10,
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },

  textContainer: {
    flex: 1,
  },

  transactionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
    fontFamily: 'intermedium',
  },

  transactionDate: {
    fontSize: 14,
    color: '#777777',
    fontWeight: "400",
    fontFamily: 'interregular',
  },

  amount: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'interregular',
  },

  debitAmount: {
    color: '#BE3128',
  },

  creditAmount: {
    color: '#16A34A',
  },

  editButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 8,
    gap: 6,
  },

  editText: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: '600',
    fontFamily: 'intersemibold',
  },
})