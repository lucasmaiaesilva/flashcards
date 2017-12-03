import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { container, deckTitle } from './../../utils/styles'
import { blue } from './../../utils/colors'
import { createNewCard } from './../../actions/deck'

class AddCard extends Component {
  constructor () {
    super()
    this.state = {
      question: '',
      answer: ''
    }
  }

  getCard (props) {
    const { navigation = {} } = props
    const { state = {} } = navigation
    const { params = {} } = state
    const { card = {} } = params
    return card
  }

  submitValue = async () => {
    const { dispatch, navigation, deckList } = this.props
    const { question, answer } = this.state
    const cardName = this.getCard(this.props)
    const questionObj = {
      question,
      answer
    }
    const questions = deckList[cardName].questions
    questions.push(questionObj)
    const newObj = {
      [cardName]: {
        title: cardName,
        questions
      }
    }
    await dispatch(createNewCard(newObj))
    alert('Card Succesfully created')
    console.log(deckList)
  }

  render () {
    const card = this.getCard(this.props)
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
            onChangeText={text => this.setState({ question: text })}
          />

          <TextInput
            style={styles.input}
            value={answer}
            placeholder='Answer for the question above'
            onChangeText={text => this.setState({ answer: text })}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: blue, alignSelf: 'flex-end' }]}
            onPress={this.submitValue}
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

function mapStateToProps (state) {
  return {
    deckList: state.decks
  }
}

export default connect(mapStateToProps)(AddCard)
