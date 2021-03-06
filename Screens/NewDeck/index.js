import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { updateDecks, getDecks } from './../../utils/api'
import { listDecks } from './../../actions/deck'
import { container, deckTitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

class NewDeck extends Component {
  constructor (props) {
    super(props)
    this.state = {
      titleDeck: ''
    }
  }

  submit = async () => {
    const { titleDeck } = this.state
    const { dispatch } = this.props

    const newDeckObj = {
      [titleDeck]: {
        title: titleDeck,
        questions: []
      }
    }

    await updateDecks(newDeckObj)
    getDecks()
      .then(res => dispatch(listDecks(JSON.parse(res))))
      .then((res) => {
        alert('Data inserted with success')
        const { navigation } = this.props
        navigation.navigate('Deck', { deck: newDeckObj[titleDeck] })
      })
  }

  render () {
    const { titleDeck } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{ width: 300 }}>
          <Text style={[styles.deckTitle, { fontSize: 28, marginBottom: 28, textAlign: 'center' }]}>
            What is the title of your new Deck?
          </Text>

          <TextInput
            style={styles.input}
            value={titleDeck}
            placeholder='question for the card'
            onChangeText={text => this.setState({ titleDeck: text })}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: blue, alignSelf: 'center' }]}
            onPress={this.submit}
          >
            <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container,
  deckTitle,
  input: {
    fontSize: 20,
    height: 44,
    padding: 8,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 10,
    borderRadius: 3,
    borderWidth: 0,
    width: 200
  }
})

export default connect()(NewDeck)
