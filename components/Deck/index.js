import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

class Deck extends Component {
  static navigationOptions ({ navigation }) {
    return {
      title: navigation.state.params.deckList.name
    }
  }

  render () {
    const { navigation = {} } = this.props
    const card = navigation.state.params.deckList
    return (
      <View style={container}>
        <Text style={[styles.deckTitle, { fontSize: 30 }]}>
          {card.name}
        </Text>
        <Text style={[styles.deckSubtitle, { fontSize: 17 }]}>
          {card.cards} {card.cards === 1 ? 'card' : 'cards'}
        </Text>
        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCard', { card: card.name })}>
            <Text style={[styles.button, { borderColor: blue, color: blue }]}>Add a card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
            <Text style={[styles.button, { backgroundColor: blue, color: '#fff', borderColor: blue }]}>
              start a quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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
