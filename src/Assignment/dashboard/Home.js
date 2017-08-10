import React, { Component } from 'react';

class Home extends Component {
  render() {
    const name = localStorage.getItem('userName');
    return (
      <div className="App-page">
        <h2>Welcome {name}</h2>
      </div>
    );
  }
}

export default Home;
