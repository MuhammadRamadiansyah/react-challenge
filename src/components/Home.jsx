import React, { Component } from 'react';
import { Grid, Row, Col, Pager, Alert } from 'react-bootstrap';
import ListArticle from './home/ListArticles'
import ArticleColumn from "./home/ArticleColumn";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllArticles, getArticlesByCategory } from '../stores/articles/actions'
import { getTopArticles, nextArticles, prevArticles } from '../stores/top-articles/actions'
import './Home.css'

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
    this.props.getAllArticles()
    window.setTimeout( () => {
      this.props.getTopArticles(this.props.articles.slice(0,5))
    }, 1000)
  }
  
  render () {

    var {
      articles,
      topArticles,
      loading,
      message,
      error
    } = this.props
    let listArticles = articles.map( article => 
      <ListArticle article= { article } history= { this.props.history } key= { 'article-' +article.url} />
    )
    if (error) { 
      return (
        <Alert bsStyle="danger">
          <strong>Oops!</strong> Something wrong!, { message }
        </Alert>
      )
    }

    if (loading) {
      return (
      <div className="container-loading">
        <div className="loader center"></div>
      </div>
      )
    } else {
      return (
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <h3> Top 5 Articles</h3>
                <ArticleColumn news={ topArticles } />
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
}

const mapStateToProps = (state) => ({
  articles: state.article.data,
  topArticles: state.topArticle,
  loading: state.article.loading,
  error: state.article.error.status,
  message: state.article.error.message
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