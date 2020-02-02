import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { addCard } from '../actions';

const AddCardScreen = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const { key } = navigation.state.params

  const handlePress = () => {
    dispatch(addCard(key, { question, answer }))
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Card</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setQuestion(text)}
        value={question}
        placeholder="type question"
      />
      <TextInput
        style={[styles.input, {marginBottom: 20}]}
        onChangeText={text => setAnswer(text)}
        value={answer}
        placeholder="type answer"
      />
      <Button
        title="Submit"
        onPress={handlePress}
        disabled={!answer.length || !question.length}
      />
    </View>
  )
}

AddCardScreen.navigationOptions = ({ navigation }) => ({
  title: `Add Card to ${navigation.state.params.key}`,
})

export default AddCardScreen

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
    padding: 4

  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
})