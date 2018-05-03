import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'

export default class ArticleBox extends Component {

	render () {
		return (
		<Thumbnail src={ this.props.image || 'http://www.tradefireworks.net/product_images/fan-slices_242_200_no-image.gif&zc=1'}  alt="242x200/png/jpeg">
			<h3>{ this.props.title }</h3>
			<small>Author : { this.props.author }</small>
			<br />
			<small>Source : { this.props.source}</small>
			<br />
			<p>{ this.props.description }</p>
			<small>Published at: {this.props.publishedAt.toLocaleString()}</small>
		</Thumbnail>
		)
	}
}