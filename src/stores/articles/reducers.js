const initialState = {
  error: {
    status: false,
    message: ''
  },
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
      const error = {
        status: true,
        message: action.payload.message
      }
      return {
        ...state,
        loading: false,
        error: error
      }
    default:
      return {
        ...state
      }
  }
}

export default reducers