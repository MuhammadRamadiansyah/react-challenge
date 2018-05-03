import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import articleReducers from './articles/reducers'
import topArticleReducers from './top-articles/reducers'
import detailArticleReducers from './detail-article/reducers'

const rootReducer = combineReducers({article: articleReducers, topArticle: topArticleReducers, detailArticle: detailArticleReducers})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store