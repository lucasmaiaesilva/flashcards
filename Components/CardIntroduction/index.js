import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { deckTitle, deckSubtitle } from './../../utils/styles'

const CardIntroduction = (props) => {
  const { titleSize, subtitleSize } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.deckTitle, { fontSize: titleSize }]}>
        NodeJS
      </Text>
      <Text style={[styles.deckSubtitle, { fontSize: subtitleSize }]}>
        5 cards
      </Text>
    </View>
  )
}

CardIntroduction.propTypes = {
  titleSize: PropTypes.number.isRequired,
  subtitleSize: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  deckTitle,
  deckSubtitle,
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CardIntroduction
