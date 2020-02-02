import { ADD_DECKS, ADD_CARD, ADD_DECK, DELETE_DECK, DATA_KEY } from '../actions';
import { AsyncStorage } from 'react-native'

// AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))

export default function (state = null, action) {
  switch (action.type) {
    case ADD_DECKS:
      return {
        ...state,
        ...action.data
      }
    case ADD_CARD: {
      const data = {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: state[action.key].questions.concat([action.data])
        }
      }
      AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
      return data
    }
    case ADD_DECK: {
      const data = {
        ...state,
        [action.data.title]: action.data
      }
      AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
      return data
    }
    case DELETE_DECK: {
      const data = {...state};
      delete data[action.title]
      AsyncStorage.setItem(DATA_KEY, JSON.stringify(data))
      return data
    }
    default:
      return state;
  }
}