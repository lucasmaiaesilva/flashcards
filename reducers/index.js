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
      listDecks: Object.keys(state).map(item => ({
        name: item, cards: initialState[item].questions.length
      }))
    }
  default:
    return state
  }
}
