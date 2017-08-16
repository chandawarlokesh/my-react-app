import React, { Component } from 'react';
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import get from 'lodash/get'
import Header from './common/Header'
import Navigation from './common/Navigation'

import Main from './route';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Assignment extends Component {

  componentDidMount() {
    window.addEventListener('message', this.redirectToMain, false);
  }

  componentWillUnmount() {
    window.addEventListener('message', {}, false);
  }

  redirectToMain = (event) => {
    const { data } = event;
    console.log(data);
    if (data !== "" && !isObject(data)) {
      isFunction(window.GEFunctions) && window.GEFunctions.init(data);
      this.getUserList();
    }
  }

  getUserList = () => {
    const { history } = this.props
    isFunction(window.GEFunctions) && window.GEFunctions.getUserData()
      .then(function (e) {
        const response = JSON.parse(e.target.response);
        window.GEFunctions.setUserName(get(response, 'Data.userName', null));
        history.replace(window.GEFunctions.getAppUrl());
      }, function (e) {
        // handle errors
        console.log('Hello error ', e);
      });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default Assignment;
