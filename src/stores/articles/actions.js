import { GET_ALL_ARTICLES, GET_ARTICLES_BY_CATEGORY } from '../actions.type'

export const getAllArticles = (articles) => ({
  type: GET_ALL_ARTICLES,
  payload: articles
}) 

export const getArticlesByCategory = (articles) => ({
  type: GET_ARTICLES_BY_CATEGORY,
  payload: articles
})