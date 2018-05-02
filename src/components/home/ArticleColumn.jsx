import React, { Component } from 'react';
import { Button, Thumbnail } from 'react-bootstrap'

export default class ArticleColumn extends Component {

  render () {
    let getArticles = this.props.news.map( article => 
      <Thumbnail  key={ 'articleDetail-' +article.url} src={article.urlToImage || 'http://www.tradefireworks.net/product_images/fan-slices_242_200_no-image.gif&zc=1'}  alt="242x200">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>
          <Button bsStyle="primary" href={article.url}>Detail</Button>
        </p>
      </Thumbnail>
    )
    return (
      <div>
        { getArticles }
      </div>
    )
  }
}