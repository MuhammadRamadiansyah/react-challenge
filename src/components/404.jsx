import React, { Component } from 'react';
import {Alert} from 'react-bootstrap'

export default class NotFound extends Component {
  render () {
    return  (
      <Alert bsStyle="danger" onDismiss={this.handleDismiss} style={{
        margin: '10px'
      }}>
        <h4>404 - File or directory not found</h4>
        <p>
          The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </Alert>
    )
  }
}