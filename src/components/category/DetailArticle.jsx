import React, { Component } from 'react'
import store from '../../stores/index.js'
import ArticleBox from '../general/ArticleBox'

export default class DetailArticle extends Component {

  constructor () {
    super()
    this.state = {
      detailArticle: store.getState().article[0]
    }
  }

  componentDidMount () {
    store.subscribe( () => {
      this.setState({
        detailArticle: store.getState().article[0] 
      })
    })
    if (!this.state.detailArticle) {
      console.log(this.props.history.push('/'))
    }
  }
  render () {
    var {
      author,
      title,
      publishedAt,
      description,
      urlToImage
    } = store.getState().article[0]

    return (
      <div>
        <ArticleBox image= { urlToImage }
                    title= { title } 
                    description= { description } 
                    publishedAt= { publishedAt } 
                    source= { this.state.detailArticle.source.name} 
                    author= { author }/>
      </div>
    )
  }
}