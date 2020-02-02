import { initialData } from '../helpers';
import { AsyncStorage } from 'react-native'

export const DATA_KEY = 'DATA_KEY';
export const ADD_DECKS = 'ADD_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';


export const getDecks = () => (
  (dispatch) => {
    AsyncStorage.getItem(DATA_KEY)
      .then(res => {
        if (!res) {
          dispatch(addDecks(initialData))
          AsyncStorage.setItem(DATA_KEY, JSON.stringify(initialData))
        } else {
          const data = JSON.parse(res)
          dispatch(addDecks(data))
        }
      })
  }
)

export const addDecks = (data) => (
  (dispatch) => {
    dispatch({
      type: ADD_DECKS,
      data
    })
  }
)

export const addCard = (key, data) => (
  (dispatch) => {
    dispatch({
      type: ADD_CARD,
      data,
      key
    })
  }
)

export const addDeck = (title) => (
  (dispatch) => {
    const data = {
      title,
      questions: []
    }
    dispatch({
      type: ADD_DECK,
      data
    })
  }
)

export const deleteDeck = (title) => (
  (dispatch) => {
    dispatch({
      type: DELETE_DECK,
      title
    })
  }
)