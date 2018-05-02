import React, { Component } from 'react';
import {Alert, Button} from 'react-bootstrap'

export default class NotFound extends Component {
  render () {
    return  (
      <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
        <h4>Oh snap! You got an error!</h4>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <p>
          <Button bsStyle="danger">Take this action</Button>
          <span> or </span>
          <Button onClick={this.handleDismiss}>Hide Alert</Button>
        </p>
      </Alert>
    )
  }
}