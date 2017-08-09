import React, { Component } from 'react';
import Header from './common/Header'
import Main from './route';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Assignment extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default Assignment;
