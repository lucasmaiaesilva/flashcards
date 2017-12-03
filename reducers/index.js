const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case 'LIST_DECKS':
    return {
      decks: state,
      listDecks: Object.keys(state).map(item => ({
        name: item, cards: initialState[item].questions.length
      }))
    }
  case 'NEW_DECK':
    return {
      ...state,
      decks: {
        ...state.decks,
        [action.name]: {
          title: action.name,
          questions: []
        }
      }
    }
  case 'ADD_CARD':
    return {
      ...state,
      decks: {
        ...state.decks,
        ...action.name
      }
    }
  default:
    return state
  }
}
