import React, { Component } from 'react';
import isFunction from 'lodash/isFunction'

export default class Main extends Component {
  render() {
    const userName = isFunction(window.GEFunctions) ? window.GEFunctions.getUserName() : ""
    return (
      <div className="App-page">
        <h2>{`Welcome ${userName}`}</h2>
      </div>
    )
  }
}
