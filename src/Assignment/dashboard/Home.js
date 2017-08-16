import React, { Component } from 'react';
import isFunction from 'lodash/isFunction'

class Home extends Component {
  render() {
    const name = isFunction(window.GEFunctions) && window.GEFunctions.getUserName();
    return (
      <div className="App-page">
        <h2>Welcome {name}</h2>
      </div>
    );
  }
}

export default Home;
