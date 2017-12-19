import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './../../Components/CardIntroduction'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

class Deck extends Component {
  static navigationOptions ({ navigation }) {
    return {
      title: navigation.state.params.deck.title
    }
    // return {
    //   title: 'Node JS'
    // }
  }

  render () {
    const { navigation } = this.props
    const { state } = navigation
    const { params } = state
    const { deck } = params
    return (
      <View style={container}>
        <Card titleSize={30} subtitleSize={17} deck={deck} />

        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCard', { deck })}>
            <Text style={[styles.button, { borderColor: blue, color: blue }]}>Add a card</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={
              () => (deck.questions.length === 0 ? alert('please add a card first') : navigation.navigate('Quiz', { deck }))
            }
          >
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
