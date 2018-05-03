import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { getDetailArticle } from '../../stores/detail-article/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ListArticle extends Component {

  getDetail = () => {
    this.props.getDetailArticle(this.props.article)
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



const mapStateToDispatch = (dispatch) => bindActionCreators({
  getDetailArticle
}, dispatch)
export default connect(
  null,
  mapStateToDispatch
)(ListArticle)