import React, { Component } from 'react';
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import has from 'lodash/has'
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
    console.log('Event Object : ', event);
      if (!has(event, 'data.data')) {
        const { data } = event;
        if (data !== "" && !isObject(data)) {
          const eventData = JSON.parse(data);
          const { appId, token, appUrl } = eventData
          isFunction(window.GEFunctions) && window.GEFunctions.init(token, appId);
          console.log('token value :', token,' app=', appId);
          this.props.history.replace(appUrl);
          // this.getUserList(token, appId, appUrl);
        }
      }
  }

  getUserList = (appUrl) => {
    const { history } = this.props
    isFunction(window.GEFunctions) && window.GEFunctions.getUserData()
      .then(function (e) {
        const response = JSON.parse(e.target.response);
        console.log('Result ', response);
        localStorage.setItem('userName', get(response, 'Data.userName', null));
        const roleName = response['Data']['role'][0]['roleName']
        localStorage.setItem('role', roleName === 'admin' ? roleName : 'role');
        history.replace(appUrl);
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
