const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_TOP_ARTICLES':
      return action.payload  
    case 'NEXT_ARTICLES':
      return action.payload
    case 'PREV_ARTICLES':
      return action.payload
    default:
      return state
  }
}

export default reducers