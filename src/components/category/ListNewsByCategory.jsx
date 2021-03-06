import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import axios from 'axios'
import store from '../../stores/index.js'

export default class ListNewsByCategory extends Component {

  constructor () {
    super()
    this.state = {
      newsByCategory: store.getState().article
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps)
  //   return 1
  // }
  componentWillReceiveProps (nextProps, prevState) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${nextProps.match.params.category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {
      store.dispatch({
        type: 'GET_ARTICLES_BY_CATEGORY',
        payload: response.data.articles
      })
      this.setState({
        newsByCategory: store.getState().article
      })
    })
    .catch((err) => console.log(err))
  }

  componentDidMount () {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${this.props.match.params.category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {

      store.dispatch({
        type: 'GET_ARTICLES_BY_CATEGORY',
        payload: response.data.articles
      })
      this.setState({
        newsByCategory: store.getState().article
      })
      
    })
    .catch((err) => console.log(err))
  }

  getDetail (article) {
    let getUrl = this.props.match.url
    store.dispatch({
      type: 'GET_DETAIL_ARTICLE',
      payload: [ article ]
    })
    
    this.props.history.push(`${getUrl}/${article.title}`)
  }

  render () {

    let articles = this.state.newsByCategory.map( article => 
      <Panel bsStyle="primary" key={ 'articleDetailCategory-' +article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3"> {article.title}</Panel.Title>
        </Panel.Heading>
        <small>Written by: {article.author}</small>
        <br />
        <small>Published by: {article.source.name}</small>
        <Panel.Body> { article.description }</Panel.Body>
        <Button bsStyle="info" onClick={this.getDetail.bind(this, article)} style={{
          margin: '10px'
        }}>Detail</Button>
      </Panel>  
    )
    return (
      <div>
        { articles }
      </div>
    )
  }
}