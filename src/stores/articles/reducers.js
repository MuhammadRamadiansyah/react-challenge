const initialState = {
  error: false,
  loading: false,
  data: []
}

const reducers = (state= {...initialState }, action) => {
  switch (action.type) {
    case 'LOAD_ALL_ARTICLES_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case 'LOAD_ARTICLES_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_ARTICLES_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return {
        ...state
      }
  }
}

export default reducers