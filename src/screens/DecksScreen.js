import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import { getDecks } from '../actions'
import ItemDeck from '../components/ItemDeck'

const DecksScreen = ({decks, navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('lalal', decks)
    if (!decks) {
      console.count('in')
      dispatch(getDecks())
    }
  }, [decks])

  if (!decks) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    // <ScrollView style={{flex:1}}>
      <FlatList
        data={Object.keys(decks)}
        renderItem={({ item }) => (
          <ItemDeck
            key={item}
            item={decks[item]}
            onPress={() => navigation.navigate('Deck', {key: item})} 
          /> 
        )}
      />
    // </ScrollView>
  )
}

const mapStateToProps = (state, props) => {
  console.log('store', state, props)

  return {decks: state}
}

export default connect(mapStateToProps)(DecksScreen)
