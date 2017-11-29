import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const NewDeck = () => (
  <View style={styles.container}>
    <Text>NewDeck view</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default NewDeck
