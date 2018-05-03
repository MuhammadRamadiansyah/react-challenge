import React, { Component } from 'react';
import ArticleBox from '../general/ArticleBox'

export default class ArticleColumn extends Component {

  render () {
    let getArticles = this.props.news.map( article => 
      <ArticleBox image= { article.urlToImage }
                  title= { article.title } 
                  description= { article.description } 
                  publishedAt= { article.publishedAt } 
                  source= { article.source.name} 
                  author= { article.author }
                  key={ 'articleDetail-' +article.url}/>
    )
    return (
      <div>
        { getArticles }
      </div>
    )
  }
}