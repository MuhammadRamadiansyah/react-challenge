import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'

export default class DetailArticle extends Component {
  render () {
    return (
      <Thumbnail>
        <h3>{this.props.match.params.title}l</h3>
        <small>Author : {`${this.props.match.params.author}`}</small>
        <br />
        <small>Source : {`${this.props.match.params.source}`}</small>
        <br />
        <p>{this.props.match.params.description}</p>
        <small>Published at: {`${this.props.match.params.publisheddate.toLocaleString()}`}</small>
      </Thumbnail>
    )
  }
}