import React, { Component } from 'react';
import Navigation from './Navigation'

class Contact extends Component {
  render() {
    return (
      <div className="App-page">
        <Navigation/>
        <h2>Contact</h2>
        {"visit "}
        <a href="http://harbingergroup.com/" target="blank">harbingergroup.com</a>
        {" website"}
      </div>
    );
  }
}

export default Contact;
