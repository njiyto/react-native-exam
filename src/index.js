import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import Screens from './screens';

const store = createStore(reducer, middleware);

const Main = () => (
  <Provider store={store}>
    <Screens />
  </Provider>
)

export default Main
