import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { getArticlesByCategory } from '../../stores/articles/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class ListCategory extends Component {

  getArticlesByCategory (category) {
    this.props.getArticlesByCategory(category)
  }
  render() {
    let categoryList = this.props.categories.map( category =>
      <ListGroupItem key={`list-${category}`} >
          <Link to={`${this.props.getUrl}/${ category }`} onClick={ this.getArticlesByCategory.bind(this, category)}>{ category }</Link>
      </ListGroupItem>
    )
    return (
      <ListGroup>
        { categoryList }
      </ListGroup>
    )
  }
}

const mapStateToDispatch = (dispatch) => bindActionCreators({
  getArticlesByCategory,
}, dispatch)

export default connect(
  null,
  mapStateToDispatch
)(ListCategory)