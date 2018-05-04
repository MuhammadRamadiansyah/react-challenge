import { LOAD_ARTICLES_ERROR, LOAD_ARTICLES_LOADING, LOAD_ALL_ARTICLES_SUCCESS} from '../actions.type'
import axios from 'axios'

export const getAllArticles = () => {
  return dispatch => {
    dispatch(loadArticlesLoading())
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=be71eb3a224f436bad9338489412fedb')
         .then((response) => {
           dispatch(loadAllArticlesSuccess(response.data.articles))
         })
         .catch((err) => dispatch(loadArticlesError(err)))
  }
}

export const getArticlesByCategory = (category) => {
  return dispatch => {
    dispatch(loadArticlesLoading())
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {
      dispatch(loadAllArticlesSuccess(response.data.articles))    
    })
    .catch((err) => dispatch(loadArticlesError(err)))
  }
}

const loadAllArticlesSuccess = (articles) => ({
  type: LOAD_ALL_ARTICLES_SUCCESS,
  payload: articles
}) 

const loadArticlesLoading = () => ({
  type: LOAD_ARTICLES_LOADING,
})

const loadArticlesError = (err) => ({
  type: LOAD_ARTICLES_ERROR,
  payload: err
})


