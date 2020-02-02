import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ItemDeck = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.count}>{item.questions.length} cards</Text>
    </TouchableOpacity>
  )
}

export default ItemDeck


const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 22
  },
  count: {
    color: '#c0c'
  }
})