import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { blue, red } from './../../utils/colors'

class Quiz extends Component {
  constructor () {
    super()
    this.state = {
      indexQuestion: 0,
      isAnswer: true
    }
  }

  switchScreen = () => {
    this.setState(prevState => ({
      isAnswer: !prevState.isAnswer
    }))
  }

  render () {
    const { navigation = {} } = this.props
    const { state = {} } = navigation
    const { params = {} } = state
    const { deck } = params
    const { questions } = deck
    const { indexQuestion, isAnswer } = this.state
    const question = questions[indexQuestion].question
    const answer = questions[indexQuestion].answer
    return (
      <View style={container}>
        <Text style={[styles.deckTitle, { fontSize: 30, textAlign: 'center' }]}>
          {isAnswer ? question : answer}
        </Text>
        <TouchableOpacity onPress={this.switchScreen}>
          <Text style={{ color: red }}>
            {isAnswer ? 'answer' : 'question'}
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 80, width: 300 }}>
          <TouchableOpacity>
            <Text style={[styles.button, { backgroundColor: blue, color: '#fff', borderColor: blue }]}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.button, { borderColor: blue, color: blue }]}>
              Incorrect
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

export default Quiz
