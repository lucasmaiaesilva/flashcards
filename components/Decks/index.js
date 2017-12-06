import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { AsyncStorage, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import { listDecks } from './../../actions/deck'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { darkGray } from './../../utils/colors'
import initialData from './../../utils/initialData.json'

class Decks extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: true,
      decks: [],
      deckList: []
    }
  }
  async componentDidMount () {
    const key = '@Udacity:flashcards'
    const { dispatch } = this.props
    await AsyncStorage.setItem(key, JSON.stringify(initialData))
    AsyncStorage.getItem(key).then((result) => {
      const decks = JSON.parse(result)
      const deckList = Object.keys(decks).map(item => ({ name: item, cards: decks[item].questions.length }))
      this.setState({
        deckList,
        decks,
        isFetching: false
      })
    })
  }

  render () {
    const { navigation = {} } = this.props
    const { decks, deckList, isFetching } = this.state
    console.log(decks)
    if (isFetching) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View>
        {deckList.map((item, index) => (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() => navigation.navigate(
              'Deck',
              { decks: decks[item.name], deckList: item }
            )}
          >
            <Text style={[styles.deckTitle, { fontSize: 22 }]}>
              {item.name}
            </Text>
            <Text style={[styles.deckSubtitle, { fontSize: 13 }]}>
              {item.cards} {item.cards === 1 ? 'card' : 'cards'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

// Decks.propTypes = {
//   decks: PropTypes.array
// }

// Decks.defaultProps = {
//   decks: false
// }

const styles = StyleSheet.create({
  container,
  deckTitle,
  deckSubtitle,
  item: {
    height: 100,
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Decks
