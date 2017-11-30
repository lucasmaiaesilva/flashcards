import React from 'react'
import { View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import FlashCardsStatusBar from './components/FlashCardsStatusBar/'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
})

const store = createStore(reducer)

export default function App () {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar backgroundColor='#0D8ABC' barStyle='light-content' />
        <Tabs />
      </View>
    </Provider>
  )
}
