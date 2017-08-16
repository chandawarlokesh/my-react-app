import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './dashboard/Home';
import AboutUs from './dashboard/AboutUs';
import Login from './login/Login';

class route extends Component {
  render() {
    return (
      <div className="App-main">
        <main>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/main' component={Home}/>
            <Route path='/aboutUs' component={AboutUs}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default route;
// <Redirect to="/login"/>
