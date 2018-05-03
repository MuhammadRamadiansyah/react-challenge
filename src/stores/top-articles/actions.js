import { GET_TOP_ARTICLES, NEXT_ARTICLES, PREV_ARTICLES } from '../actions.type'

export const getTopArticles = (articles) => ({
  type: GET_TOP_ARTICLES,
  payload: articles
})

export const nextArticles = (articles) => ({
  type: NEXT_ARTICLES,
  payload: articles
})

export const prevArticles = (articles) => ({
  type: PREV_ARTICLES,
  payload: articles
})