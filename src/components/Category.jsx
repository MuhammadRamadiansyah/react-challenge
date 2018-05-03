import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListCategory from './category/ListCategory'
import ListNewsByCategory from './category/ListNewsByCategory'
import DetailArticle from './category/DetailArticle'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class Category extends Component {
  constructor () {
    super()
    this.state = {
      categories: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
    }
  }
  render() {
    let getUrl = this.props.match.url
    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <h3> List Categories </h3>
              <ListCategory getUrl={ getUrl} categories={this.state.categories}/>
            </Col>
            <Col xs={12} md={8}>
            <h3> List Articles </h3>
            <Switch>
              <Route exact path={`${getUrl}/:category`} component={ListNewsByCategory}/>
              <Route path={`${getUrl}/:category/:title`} component={DetailArticle}/>
            </Switch>
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}