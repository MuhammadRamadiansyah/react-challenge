const reducers = (state={}, action) => {
  switch (action.type) {
    case 'GET_DETAIL_ARTICLE':
      return action.payload
    default:
      return state
  }
}

export default reducers