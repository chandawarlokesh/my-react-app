import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import './App.css';
import { Login, Navigation, Main, AboutUs, NoMatch } from './components/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Navigation}>
            <IndexRedirect to="/main" />
            <Route path="main" component={Main}/>
            <Route path="aboutUs" component={AboutUs}/>
            <Route path="*" component={NoMatch}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
