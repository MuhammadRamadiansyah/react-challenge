import { GET_DETAIL_ARTICLE } from '../actions.type'

export const getDetailArticle = (article) => ({
  type: GET_DETAIL_ARTICLE,
  payload: article
})
