import React, { Component } from 'react';
import axios from 'axios'
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import ListArticle from './home/ListArticles'
import ArticleColumn from "./home/ArticleColumn";

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      news: [],
      fiveTopArticles: []
    }
  }

  nextPage () {
    let prevPage = this.state.fiveTopArticles[0]
    let index = this.state.news.findIndex( article => article.url === prevPage.url) + 5
    if(index > this.state.news.length - 1) {
      index = 0
    }
    this.setState({
      fiveTopArticles: this.state.news.slice(index, index + 5)
    })

  }

  prevPage () {
    let prevPage = this.state.fiveTopArticles[0]
    let index = this.state.news.findIndex( article => article.url === prevPage.url) - 5
    if(index < 0) {
      index = this.state.news.length - 5
    }
    this.setState({
      fiveTopArticles: this.state.news.slice(index, index + 5)
    })
  }

  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=be71eb3a224f436bad9338489412fedb')
         .then((response) => {
          this.setState({
            news: response.data.articles,
            fiveTopArticles: response.data.articles.slice(0,5)
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