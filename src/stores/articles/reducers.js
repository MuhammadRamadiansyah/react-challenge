const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_ARTICLES':
      return action.payload
    case 'GET_DETAIL_ARTICLE':
      return [action.payload]
    case 'GET_ARTICLES_BY_CATEGORY':
      return action.payload
    default:
      return state
  }
}

export default reducers