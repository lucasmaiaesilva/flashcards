export function listDecks () {
  return {
    type: 'LIST_DECKS'
  }
}

export function newDeck (name) {
  return {
    type: 'NEW_DECK',
    name
  }
}

export function createNewCard (name) {
  return {
    type: 'ADD_CARD',
    name
  }
}
