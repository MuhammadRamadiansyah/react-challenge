import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap'

export default class ArticleBox extends Component {

	render () {
		var {
			image,
			title,
			author,
			source,
			description,
			publishedAt
		} = this.props

		return (
		<Thumbnail src={ image.split("?")[0] || 'http://www.tradefireworks.net/product_images/fan-slices_242_200_no-image.gif&zc=1'}  alt="242x200">
			<h3>{ title }</h3>
			<small>Author : { author }</small>
			<br />
			<small>Source : { source}</small>
			<br />
			<p>{ description }</p>
			<small>Published at: {publishedAt.toLocaleString()}</small>
		</Thumbnail>
		)
	}
}