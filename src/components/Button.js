import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, name, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button
