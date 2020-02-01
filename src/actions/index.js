import { initialData } from '../helpers';
// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const DATA_KEY = 'DATA_KEY';
export const ADD_DESKS = 'ADD_DESKS';
export const ADD_CARD = 'ADD_CARD';

export const getDecks = () => (
  (dispatch) => {
    AsyncStorage.getItem(DATA_KEY)
      .then(res => {
        console.log('res', res)
        if (!res) {
          dispatch(addDecks(initialData))
        } else {
          // dispatch(addDecks(res))
        }
      })
  }
)

export const addDecks = (data) => (
  (dispatch) => {
    dispatch({
      type: ADD_DESKS,
      data
    })
    // AsyncStorage.setItem(JSON.stringify(data))
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