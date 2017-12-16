import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Card from './../../Components/CardIntroduction'
import { listDecks } from './../../actions/deck'
import { getDecks, setDecks } from './../../utils/api'
import { darkGray } from './../../utils/colors'
import initialData from './../../utils/initialData.json'

class Decks extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: false
    }
  }

  render () {
    const { navigation = {}, decks } = this.props
    const { isFetching } = this.state
    if (isFetching) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Deck')}
        >
          <Card titleSize={22} subtitleSize={13} />
        </TouchableOpacity>
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
  item: {
    height: 100,
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
  decks: state.listDecks
})

export default connect(mapStateToProps)(Decks)
