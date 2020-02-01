import { ADD_DESKS, ADD_CARD } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case ADD_DESKS:
      return {
        ...state,
        ...action.data
      }
    case ADD_CARD:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: state[action.key].questions.concat([action.data])
        }
      }
    default:
      return state;
  }
}