import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to='/home' activeClassName="active">Home Page</NavLink></li>
            <li><NavLink to='/about_us' activeClassName="active">About Us</NavLink></li>
            <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
