import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { addCard } from '../actions';

const AddCard = ({ navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const { key } = navigation.state.params

  const handlePress = () => {
    dispatch(addCard(key, { question, answer }))
    navigation.goBack();
  }

  return (
    <View>
      <Text>AddCard</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setQuestion(text)}
        value={question}
        placeholder="type question"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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

export default AddCard
