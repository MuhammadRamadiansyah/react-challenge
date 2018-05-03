import React, { Component } from 'react'
import ArticleBox from '../general/ArticleBox'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class DetailArticle extends Component {

  render () {
    if(this.props.article.title) {
      var {
        author,
        title,
        publishedAt,
        description,
        urlToImage
      } = this.props.article
  
      return (
        <div>
          <h1> Article </h1>
          <ArticleBox image= { urlToImage }
                      title= { title } 
                      description= { description } 
                      publishedAt= { publishedAt } 
                      source= { this.props.article.source.name} 
                      author= { author }/>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
    
  }
}

const mapStateToProps = (state) => ({
  article: state.detailArticle
})

export default connect(
  mapStateToProps,
  null
)(DetailArticle)