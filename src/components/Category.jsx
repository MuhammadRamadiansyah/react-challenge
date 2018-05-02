import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListCategory from './category/ListCategory'
import ListNewsByCategory from './category/ListNewsByCategory'
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
              <h3> List Category </h3>
              <ListCategory getUrl={ getUrl} categories={this.state.categories}/>
            </Col>
            <Col xs={12} md={8}>
            <Switch>
              <Route path={`${getUrl}/:category`} component={ListNewsByCategory}/>
            </Switch>
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}