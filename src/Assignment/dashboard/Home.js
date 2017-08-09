import React, { Component } from 'react';
import Navigation from './Navigation'

class Home extends Component {
  render() {
    const name = localStorage.getItem('userName');
    return (
      <div className="App-page">
        <Navigation/>
        <h2>Welcome {name}</h2>
      </div>
    );
  }
}

export default Home;
