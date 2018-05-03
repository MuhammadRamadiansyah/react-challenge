import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ListCategory from './category/ListCategory'
import ListNewsByCategory from './category/ListNewsByCategory'
import DetailArticle from './category/DetailArticle'
import NotFound from '../components/404'
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
            <Switch>
              <Route exact path={`${getUrl}/:category`} render = {
                ((nextProps, prevState) => {
                    let index = this.state.categories.findIndex( category => category === nextProps.location.pathname.substr(10,nextProps.location.pathname.length))
                    if (index !== -1) { return <ListNewsByCategory props= { nextProps } /> }
                    else { return <NotFound /> }
                  }
                )
              }/>
              <Route path={`${getUrl}/:category/:title`} component={DetailArticle}/>
            </Switch>
            </Col>
          </Row>
        </Grid>
      </Router>
    )
  }
}