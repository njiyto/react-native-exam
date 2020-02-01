import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ItemDeck = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.title}</Text>
      <Text>{item.questions.length} cards</Text>
    </TouchableOpacity>
  )
}

export default ItemDeck
