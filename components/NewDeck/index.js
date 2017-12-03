import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { container, deckTitle } from './../../utils/styles'
import { newDeck } from './../../actions/deck'
import { blue } from './../../utils/colors'

class NewDeck extends Component {
  constructor () {
    super()
    this.state = {
      titleDeck: ''
    }
  }

  render () {
    const { titleDeck } = this.state
    const { dispatch, data } = this.props
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
            onPress={() => {
              dispatch(newDeck(titleDeck))
              console.log(this.props.data)
              // alert('Data inserted succesfully!')
            }}
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

const mapStateToProps = state => ({
  data: state.listDeck
})

export default connect(mapStateToProps)(NewDeck)
