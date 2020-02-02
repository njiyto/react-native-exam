import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { addDeck } from '../actions';

const AddDeckScreen = ({ navigation, decks }) => {
  const [deck, setDeck] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (decks.includes(deck)) {
      setError(true);
      setDeck('')
    } else {
      dispatch(addDeck(deck));
      setDeck('')
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is the title new title of new deck?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => { setDeck(text); setError(false) }}
        value={deck}
        placeholder="type name"
      />
      {error && (
        <Text style={{ color: 'red' }}>Title has to be unique</Text>
      )}
      <Button
        title="Create Deck"
        onPress={handlePress}
        disabled={!deck.length}
      />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    decks: Object.keys(state)
  }
}

AddDeckScreen.navigationOptions = {
  title: 'Add New Deck',
}

export default connect(mapStateToProps)(AddDeckScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4,
    width: '90%',
    padding: 4,
    marginBottom: 20

  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
})
