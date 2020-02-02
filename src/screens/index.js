import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DecksScreen from './DecksScreen';
import AddDeckScreen from './AddDeckScreen';
import DeckScreen from './DeckScreen';
import AddCardScreen from './AddCardScreen';
import QuizScreen from './QuizScreen'

const MainScreen = createBottomTabNavigator({
  Decks: DecksScreen,
  addDesk: AddDeckScreen,
});

const Screens = createStackNavigator({
  Decks: MainScreen,
  Deck: DeckScreen,
  Card: AddCardScreen,
  Quiz: QuizScreen
});

export default createAppContainer(Screens)
