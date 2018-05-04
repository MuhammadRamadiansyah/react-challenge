import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import articleReducers from './articles/reducers'
import topArticleReducers from './top-articles/reducers'
import detailArticleReducers from './detail-article/reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({article: articleReducers, topArticle: topArticleReducers, detailArticle: detailArticleReducers})
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(mySaga)


export default store