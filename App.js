import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Deck from './Screens/Deck/'
import AddCard from './Screens/AddCard'
import Quiz from './Screens/Quiz'
import FlashCardsStatusBar from './Components/FlashCardsStatusBar/'
import { setLocalNotification } from './utils/api'
import Tabs from './Components/Tabs/'

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

class App extends Component {
  componentDidMount () {
    setLocalNotification()
  }
  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar backgroundColor='#0D8ABC' barStyle='light-content' />
          <DecksNavigator />
        </View>
      </Provider>
    )
  }
}

export default App
