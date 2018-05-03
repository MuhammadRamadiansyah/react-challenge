import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import store from '../../stores/index.js'

export default class ListArticle extends Component {

  getDetail = () => {
    store.dispatch({
      type: 'GET_DETAIL_ARTICLE',
      payload: [ this.props.article ]
    })
    this.props.history.push(`detail/${this.props.article.title}`)
  }

  render () {
    var {
      author,
      title
    } = this.props.article
    return (
      <ListGroup>
        <ListGroupItem header= { title }>Author : { author }</ListGroupItem>
        <Button bsStyle="info" onClick={this.getDetail} style={{
          margin: '10px'
        }}>Detail</Button>
      </ListGroup>
    )
  }
}