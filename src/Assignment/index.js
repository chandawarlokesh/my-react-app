import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Login from './login/Login';
import Header from './common/Header'
import Layout from './dashboard/Layout';
import Home from './dashboard/Home';
import AboutUs from './dashboard/AboutUs';
import Contact from './dashboard/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Assignment extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-main">
          <BrowserRouter>
            <Switch>
              <Route path='/login' component={Login}/>
              <Layout>
                <Route component={({ match }) =>
                  <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about_us' component={AboutUs}/>
                    <Route path='/contact' component={Contact}/>
                    <Redirect to="/login"/>
                  </Switch>
                }/>
              </Layout>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Assignment;
