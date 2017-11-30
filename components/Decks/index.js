import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { black, darkGray } from './../../utils/colors'

const data = [
  { name: 'React', cards: 3 },
  { name: 'Redux', cards: 5 },
  { name: 'Javascript', cards: 9 }
]

const Decks = () => (
  <View>
    {data.map(item => (
      <TouchableOpacity key={item.name} style={styles.item}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.cards} cards</Text>
      </TouchableOpacity>
    ))}
  </View>
)

const styles = StyleSheet.create({
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

export default Decks
