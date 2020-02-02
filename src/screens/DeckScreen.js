import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect, useDispatch} from 'react-redux';
import { deleteDeck } from '../actions';
import { clearLocalNotification, setLocalNotification } from '../helpers'
 
const DeckScreen = ({ deck, navigation }) => {
  const dispatch = useDispatch();
  if (!deck) {
    return null;
  }

  const handleDelete = () => {
    dispatch(deleteDeck(deck.title))
    navigation.goBack();
  }

  const handleQuiz = () => {
    clearLocalNotification()
      .then(setLocalNotification);
    navigation.navigate('Quiz', {key: deck.title})
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.count}>{deck.questions.length} cards</Text>
      </View>
      <View style={{height: 140, width: '50%', alignSelf: 'center'}}>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Button
          style={{padding: 10}}
          title="Add Card"
          onPress={() => navigation.navigate('Card', {key: deck.title})}
        />
        <Button
          style={{margin: 10}}
          title="Start Quiz"
          onPress={handleQuiz}
          disabled={!deck.questions.length}
        />
        <Button
          title="Delete Deck"
          onPress={handleDelete}
        />
         </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state, {navigation}) => {
  const { key } = navigation.state.params
  return {
    deck: state[key]
  }
}

DeckScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.key} Deck`,
})

export default connect(mapStateToProps)(DeckScreen)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around'
  },
  item: {
    borderBottomWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  count: {
    color: '#c0c',
    textAlign: 'center'
  }
})
