import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { listDecks } from './../../actions/deck'
import { container, deckTitle, deckSubtitle } from './../../utils/styles'
import { darkGray } from './../../utils/colors'

class Decks extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(listDecks())
  }
  render () {
    const { decks, navigation = {} } = this.props
    if (decks === undefined) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View>
        {decks.map(item => (
          <TouchableOpacity
            key={item.name}
            style={styles.item}
            onPress={() => navigation.navigate(
              'Deck',
              { card: item }
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

const mapStateToProps = state => ({
  decks: state.listDecks
})

export default connect(mapStateToProps)(Decks)
