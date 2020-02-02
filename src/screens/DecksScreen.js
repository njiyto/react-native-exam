import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, ScrollView, StyleSheet } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { getDecks } from '../actions'
import ItemDeck from '../components/ItemDeck';
import { setLocalNotification } from '../helpers'

const DecksScreen = ({decks, navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!decks) {
      dispatch(getDecks())
    }
  }, [decks])

   useEffect(() => {
    setLocalNotification()
  })

  if (!decks) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  if (!Object.keys(decks).length) {
    return (
      <View style={styles.list}>
        <Text style={styles.empty}>List of Decks is empty</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.list}
      data={Object.keys(decks)}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <ItemDeck
          item={decks[item]}
          onPress={() => navigation.navigate('Deck', {key: item})} 
        /> 
      )}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DecksScreen)

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    flex: 1
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30
  }
})
