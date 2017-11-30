import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { listDecks } from './../../actions/deck'
import { black, darkGray } from './../../utils/colors'
import { container } from './../../utils/styles'

const data = [
  { name: 'React', cards: 3 },
  { name: 'Redux', cards: 5 },
  { name: 'Javascript', cards: 9 }
]

class Decks extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(listDecks())
  }
  render () {
    const { decks } = this.props
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
          <TouchableOpacity key={item.name} style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemSubtitle}>{item.cards} cards</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

// Decks.propTypes = {
//   decks: PropTypes.oneOfType([
//     PropTypes.shape({
//       name: PropTypes.string,
//       cards: PropTypes.number
//     }),
//     PropTypes.bool
//   ])
// }

// Decks.defaultProps = {
//   decks: false
// }

const styles = StyleSheet.create({
  container,
  item: {
    height: 100,
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemTitle: {
    fontSize: 22,
    color: black
  },
  itemSubtitle: {
    fontSize: 13,
    color: darkGray
  }
})

const mapStateToProps = state => ({
  decks: state.listDecks
})

export default connect(mapStateToProps)(Decks)
