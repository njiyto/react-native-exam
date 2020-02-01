import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import Button from '../components/Button';
 
const DeckScreen = ({ deck, navigation }) => {
  if (!deck) {
    return null;
  }

  return (
    <View>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} cards</Text>
      <Button name="Add Card" onPress={() => navigation.navigate('Card', {key: deck.title})} />
      <Button name="Start Quiz" onPress={() => {console.log('object')}} />
      <Button name="Delete Deck" onPress={() => {console.log('object')}} />
    </View>
  )
}

const mapStateToProps = (state, {navigation}) => {
  const { key } = navigation.state.params
  console.log('store', state)

  return {deck: state[key]}
}

export default connect(mapStateToProps)(DeckScreen)
