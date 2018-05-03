import React, { Component } from 'react';
import axios from 'axios'
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import ListArticle from './home/ListArticles'
import ArticleColumn from "./home/ArticleColumn";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllArticles, getArticlesByCategory } from '../stores/articles/actions'
import { getTopArticles, nextArticles, prevArticles } from '../stores/top-articles/actions'

class Home extends Component {

  nextPage () {
    let prevPage = this.props.topArticles[0]
    let index = this.props.articles.findIndex( article => article.url === prevPage.url) + 5
    if(index > this.props.articles.length - 1) {
      index = 0
    }
    this.props.nextArticles(this.props.articles.slice(index, index + 5))
  }

  prevPage () {
    let prevPage = this.props.topArticles[0]
    let index = this.props.articles.findIndex( article => article.url === prevPage.url) - 5
    if(index < 0) {
      index = this.props.articles.length - 5
    }
    this.props.prevArticles(this.props.articles.slice(index, index + 5))
  }

  componentDidMount () {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=be71eb3a224f436bad9338489412fedb')
         .then((response) => {  
            this.props.getAllArticles(response.data.articles)
            this.props.getTopArticles(response.data.articles.slice(0,5))
         })
         .catch((err) => console.log(err))
  }

  render () {
    let listArticles = this.props.articles.map( article => 
      <ListArticle article= { article } history= { this.props.history } key= { 'article-' +article.url} />
    )
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <h3> Top 5 Articles</h3>
            <ArticleColumn news={ this.props.topArticles } />
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

const mapStateToProps = (state) => ({
  articles: state.article,
  topArticles: state.topArticle
})

const mapStateToDispatch = (dispatch) => bindActionCreators({
  getAllArticles,
  getArticlesByCategory,
  getTopArticles,
  nextArticles,
  prevArticles
}, dispatch)

const HomeLink = connect(
  mapStateToProps,
  mapStateToDispatch
)(Home)

export default HomeLink