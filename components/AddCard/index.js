import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { container, deckTitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

class AddCard extends Component {
  constructor () {
    super()
    this.state = {
      question: '',
      answer: ''
    }
  }

  render () {
    const { navigation = {} } = this.props
    const { state = {} } = navigation
    const { params = {} } = state
    const { card = {} } = params
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{ width: 300 }}>
          <Text style={[styles.deckTitle, { fontSize: 18, marginBottom: 30, textAlign: 'center' }]}>
            Type your question for the new {card} Card
          </Text>

          <TextInput
            style={styles.input}
            value={question}
            placeholder='question for the card'
            onChange={text => this.setState({ question: text })}
          />

          <TextInput
            style={styles.input}
            value={answer}
            placeholder='Answer for the question above'
            onChange={text => this.setState({ answer: text })}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: blue, alignSelf: 'flex-end' }]}
            onPress={() => alert('submited value')}
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
    marginBottom: 10
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 45,
    borderRadius: 3,
    borderWidth: 0,
    width: 200
  }
})

export default AddCard
