import React from 'react'
import { StatusBar, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

function FlashCardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
})

export default function App () {
  return (
    <View style={{ flex: 1 }}>
      <FlashCardsStatusBar backgroundColor='#0D8ABC' barStyle='light-content' />
      <Tabs />
    </View>
  )
}
