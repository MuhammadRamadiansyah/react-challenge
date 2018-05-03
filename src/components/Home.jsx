import React, { Component } from 'react';
import axios from 'axios'
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import ListArticle from './home/ListArticles'
import ArticleColumn from "./home/ArticleColumn";
import store from '../stores'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      news: store.getState().article,
      fiveTopArticles: store.getState().topArticle
    }
  }

  nextPage () {
    let prevPage = store.getState().topArticle[0]
    let index = store.getState().article.findIndex( article => article.url === prevPage.url) + 5
    if(index > store.getState().article.length - 1) {
      index = 0
    }
    store.dispatch({
      type: 'NEXT_ARTICLES',
      payload: store.getState().article.slice(index, index + 5)
    })

    store.subscribe ( () => {
      this.setState({
        fiveTopArticles: store.getState().topArticle
      })
    })
  }

  prevPage () {
    let prevPage = store.getState().topArticle[0]
    let index = store.getState().article.findIndex( article => article.url === prevPage.url) - 5
    if(index < 0) {
      index = store.getState().article.length - 5
    }

    store.dispatch({
      type: 'PREV_ARTICLES',
      payload: store.getState().article.slice(index, index + 5)
    })

    store.subscribe ( () => {
      this.setState({
        fiveTopArticles: store.getState().topArticle
      })
    })
  }

  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=be71eb3a224f436bad9338489412fedb')
         .then((response) => {  
          store.dispatch({
            type: 'GET_ALL_ARTICLES',
            payload: response.data.articles
          })
          store.dispatch({
            type: 'GET_TOP_ARTICLES',
            payload: response.data.articles.slice(0,5)
          })
          this.setState({
            fiveTopArticles: response.data.articles.slice(0,5),
            news: store.getState().article
          })
         })
         .catch((err) => console.log(err))
  }

  render () {
    let listArticles = this.state.news.map( article => 
      <ListArticle article= { article } key= { 'article-' +article.url} />
    )
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <h3> Top 5 Articles</h3>
            <ArticleColumn news={ this.state.fiveTopArticles } />
            <Pager>
              <Pager.Item onClick={this.prevPage.bind(this)}>Previous</Pager.Item>{' '}
              <Pager.Item onClick={this.nextPage.bind(this)}>Next</Pager.Item>
            </Pager>
          </Col>
          <Col xs={6} md={4}>
            <h3> List Articles</h3>
            { listArticles }
          </Col>
        </Row>
      </Grid>
    )
  }
}