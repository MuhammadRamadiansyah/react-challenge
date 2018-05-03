import { GET_ALL_ARTICLES, GET_DETAIL_ARTICLE, GET_ARTICLES_BY_CATEGORY } from '../actions.type'

export const getAllArticles = (articles) => ({
  type: GET_ALL_ARTICLES,
  payload: articles
}) 

export const getDetailArticle = (article) => ({
  type: GET_DETAIL_ARTICLE,
  payload: article
})

export const getArticlesByCategory = (articles) => ({
  type: GET_ARTICLES_BY_CATEGORY,
  payload: articles
})