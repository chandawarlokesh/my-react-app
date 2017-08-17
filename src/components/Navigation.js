import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Navigation extends Component {
  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== "true") {
        console.log("not LoggedIn");
        this.props.router.replace("/login")
    }
  }

  handleLogout = () => {
    localStorage.setItem('isLoggedIn', false);
    this.props.router.replace("/login")
  }

  render() {
    return (
      <div className="App-loggedInContainer">
        <div className="App-header">
          {'React App'}
        </div>
        <div className="App-navigation">
          <div className="App-navLinks">
            <ul>
              <li><Link activeClassName="active" to="/main">Main Page</Link></li>
              <li><Link activeClassName="active" to="/aboutUs">About Us</Link></li>
              <li><a className="LogOutButton"onClick={this.handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
        <div className="App-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
