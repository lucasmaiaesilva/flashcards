import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

const Deck = (props) => {
  const { navigation = {} } = props
  const { state = {} } = navigation
  const { params = {} } = state
  const { card = {} } = params
  return (
    <View style={container}>
      <Text style={[styles.deckTitle, { fontSize: 30 }]}>
        {card.name}
      </Text>
      <Text style={[styles.deckSubtitle, { fontSize: 17 }]}>
        {card.cards} {card.cards === 1 ? 'card' : 'cards'}
      </Text>
      <View style={{ marginTop: 80, width: 300 }}>
        <Text style={[styles.button, { borderColor: blue, color: blue }]}>
          Add a card
        </Text>
        <Text style={[styles.button, { backgroundColor: blue, color: '#fff', borderColor: blue }]}>
          start a quiz
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container,
  deckTitle,
  deckSubtitle,
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center'
  }
})

export default Deck
