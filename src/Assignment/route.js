import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './dashboard/Home';
import AboutUs from './dashboard/AboutUs';
import Contact from './dashboard/Contact';
import Login from './login/Login';

class route extends Component {
  render() {
    return (
      <div className="App-main">
        <main>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/about_us' component={AboutUs}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default route;
// <Redirect to="/login"/>
