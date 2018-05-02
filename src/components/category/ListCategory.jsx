import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ListCategory extends Component {

  render() {
    let categoryList = this.props.categories.map( category =>
      <ListGroupItem key={`list-${category}`}>
          <Link to={`${this.props.getUrl}/${ category }`}>{ category }</Link>
      </ListGroupItem>
    )
    return (
      <ListGroup>
        { categoryList }
      </ListGroup>
    )
  }
}