import React from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/Decks'
import Deck from './components/Deck/'
import AddCard from './components/AddCard'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import FlashCardsStatusBar from './components/FlashCardsStatusBar/'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
})

const DecksNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default function App () {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar backgroundColor='#0D8ABC' barStyle='light-content' />
        <DecksNavigator />
      </View>
    </Provider>
  )
}
