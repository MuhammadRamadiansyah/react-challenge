import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ListArticle extends Component {
  render () {
    var {
      author,
      title
    } = this.props.article
    return (
      <ListGroup>
        <ListGroupItem header= { title }>Author : { author }</ListGroupItem>
      </ListGroup>
    )
  }
}