import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './../../Components/CardIntroduction'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { blue } from './../../utils/colors'

const Result = ({ correctAnswers, startQuiz }) => {
  return (
    <View style={container}>
      <Text style={[styles.deckTitle, { fontSize: 30 }]}>
        Result
      </Text>

      <Text style={[styles.deckSubtitle, { fontSize: 17 }]}>
        {`The number of correct answers is ${correctAnswers}`}
      </Text>

      <View style={{ marginTop: 80, width: 300 }}>
        <TouchableOpacity onPress={() => startQuiz()}>
          <Text style={[styles.button, { borderColor: blue, color: blue }]}>Start Quiz Again</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          // onPress={
          //   () => (deck.questions.length === 0 ? alert('please add a card first') : navigation.navigate('Quiz', { deck }))
          // }
        >
          <Text style={[styles.button, { backgroundColor: blue, color: '#fff', borderColor: blue }]}>
            Return do the Deck View
          </Text>
        </TouchableOpacity>
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

export default Result
