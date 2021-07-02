import React, { Component } from 'react';
import { updateObject } from '../../library/utility';

class ErrorBoundary extends Component {
  state = {
    error: null
  };

  componentDidCatch(error) {
    this.setState(updateObject(this.state, { error: error }));
    console.log(error);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
