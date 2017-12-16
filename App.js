import React from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './Screens/Decks'
import Deck from './Screens/Deck/'
import AddCard from './Screens/AddCard'
import NewDeck from './Screens/NewDeck'
import Quiz from './Screens/Quiz'
import FlashCardsStatusBar from './Components/FlashCardsStatusBar/'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
}, {
  navigationOptions: {
    header: null
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff'
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

export default function App () {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <FlashCardsStatusBar backgroundColor='#0D8ABC' barStyle='light-content' />
        <DecksNavigator />
      </View>
    </Provider>
  )
}
