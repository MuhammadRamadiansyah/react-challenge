import React, { Component } from 'react'
import ArticleBox from '../general/ArticleBox'
import { connect } from 'react-redux'

class DetailArticle extends Component {

  render () {
    var {
      author,
      title,
      publishedAt,
      description,
      urlToImage
    } = this.props.article

    return (
      <div>
        <ArticleBox image= { urlToImage }
                    title= { title } 
                    description= { description } 
                    publishedAt= { publishedAt } 
                    source= { this.props.article.source.name} 
                    author= { author }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  article: state.detailArticle
})

export default connect(
  mapStateToProps,
  null
)(DetailArticle)