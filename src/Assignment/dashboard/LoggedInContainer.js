import React, { Component } from 'react';
import Navigation from './Navigation'

class LoggedInContainer extends Component {
  render() {
    return (
      <div className="App-page">
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default LoggedInContainer;
