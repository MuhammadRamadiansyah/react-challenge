import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticlesByCategory } from '../../stores/articles/actions'
import { getDetailArticle } from '../../stores/detail-article/actions'

class ListNewsByCategory extends Component {

  componentWillReceiveProps (nextProps, prevState) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${nextProps.match.params.category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {
      this.props.getArticlesByCategory(response.data.articles)
    })
    .catch((err) => console.log(err))
  }

  componentDidMount () {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${this.props.match.params.category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {
      this.props.getArticlesByCategory(response.data.articles)      
    })
    .catch((err) => console.log(err))
  }

  getDetail (article) {
    let getUrl = this.props.match.url
    this.props.getDetailArticle(article)
    this.props.history.push(`${getUrl}/${article.title}`)
  }

  render () {

    let articles = this.props.articles.map( article => 
      <Panel bsStyle="primary" key={ 'articleDetailCategory-' +article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3"> {article.title}</Panel.Title>
        </Panel.Heading>
        <small>Written by: {article.author}</small>
        <br />
        <small>Published by: {article.source.name}</small>
        <Panel.Body> { article.description }</Panel.Body>
        <Button bsStyle="info" onClick={this.getDetail.bind(this, article)} style={{
          margin: '10px'
        }}>Detail</Button>
      </Panel>  
    )
    return (
      <div>
        <h3> List Articles of { this.props.match.params.category} </h3>
        { articles }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.article
})

const mapStateToDispatch = (dispatch) => bindActionCreators({
  getArticlesByCategory,
  getDetailArticle
}, dispatch)
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ListNewsByCategory)