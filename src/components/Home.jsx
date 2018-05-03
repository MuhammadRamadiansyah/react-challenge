import React, { Component } from 'react';
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
  
  UNSAFE_componentWillMount () {
    this.props.getAllArticles()
    this.interval = setInterval(() => this.props.getAllArticles(), 60 * 1000)
  }
  
  componentDidMount () {
    this.props.getTopArticles(this.props.articles.slice(0,5))
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
  articles: state.article.data,
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