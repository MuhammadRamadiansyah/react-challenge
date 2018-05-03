const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_ARTICLES':
      return action.payload  
    default:
      return state
  }
}

export default reducers