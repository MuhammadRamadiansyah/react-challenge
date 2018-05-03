import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticlesByCategory } from '../../stores/articles/actions'
import { getDetailArticle } from '../../stores/detail-article/actions'

class ListNewsByCategory extends Component {

  componentWillReceiveProps (nextProps, prevState) {
    this.props.getArticlesByCategory(nextProps.props.match.params.category)
  }

  componentDidMount () {
    this.props.getArticlesByCategory(this.props.props.match.params.category)
  }

  getDetail (article) {
    let getUrl = this.props.props.match.url
    this.props.getDetailArticle(article)
    this.props.props.history.push(`${getUrl}/${article.title}`)
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
        <h3> List Articles of { this.props.props.match.params.category} </h3>
        { articles }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.article.data
})

const mapStateToDispatch = (dispatch) => bindActionCreators({
  getArticlesByCategory,
  getDetailArticle
}, dispatch)
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ListNewsByCategory)