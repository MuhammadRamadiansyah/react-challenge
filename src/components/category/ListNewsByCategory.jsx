import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import axios from 'axios'

export default class ListNewsByCategory extends Component {

  constructor () {
    super()
    this.state = {
      newsByCategory: []
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps)
  //   return 1
  // }
  componentWillReceiveProps (nextProps, prevState) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${nextProps.match.params.category}&apiKey=be71eb3a224f436bad9338489412fedb`)
    .then((response) => {
     this.setState({
       newsByCategory: response.data.articles.slice(0, 5),
     })
    })
    .catch((err) => console.log(err))
  }
  render () {

    let articles = this.state.newsByCategory.map( article => 
      <Panel bsStyle="primary" key={ 'articleDetailCategory-' +article.url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3"> {article.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body> { article.description }</Panel.Body>
      </Panel>  
    )
    return (
      <div>
        { articles }
      </div>
    )
  }
}