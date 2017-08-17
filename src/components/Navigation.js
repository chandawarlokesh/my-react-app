import React, { Component } from 'react';
import { Link } from 'react-router'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import get from 'lodash/get'

export default class Navigation extends Component {
  constructor(props){
    super(props)
    this.redirectToMain = this.redirectToMain.bind(this)
    this.getUserList = this.getUserList.bind(this)
  }

  componentDidMount() {
    window.addEventListener('message', this.redirectToMain, false);
  }

  componentWillUnmount() {
    window.addEventListener('message', {}, false);
  }

  redirectToMain = (event) => {
    const { data } = event;
    debugger;
    if (data !== "" && !isObject(data)) {
      isFunction(window.GEFunctions) && window.GEFunctions.init(data);
      this.getUserList();
    }
  }

  getUserList = () => {
    const { router } = this.props
    isFunction(window.GEFunctions) && window.GEFunctions.getUserData()
      .then(function (e) {
        const response = JSON.parse(e.target.response);
        window.GEFunctions.setUserName(get(response, 'Data.userName', null));
        router.replace(window.GEFunctions.getAppUrl());
      }, function (e) {
        // handle errors
        console.log('Hello error ', e);
      });
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
              <li></li>
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
