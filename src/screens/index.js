import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DecksScreen from './DecksScreen';
import AddDecksScreen from './AddDecksScreen';
import DeckScreen from './DeckScreen';
import AddCard from './AddCard';

const MainScreen = createBottomTabNavigator({
  Decks: DecksScreen,
  addDesk: AddDecksScreen,
});

const Screens = createStackNavigator({
  Main: MainScreen,
  Deck: DeckScreen,
  Card: AddCard
});

export default createAppContainer(Screens)
