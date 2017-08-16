import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to='/main' activeClassName="active">Main Page</NavLink></li>
            <li><NavLink to='/aboutUs' activeClassName="active">About Us</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
