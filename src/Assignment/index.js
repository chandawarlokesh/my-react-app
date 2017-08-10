import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Login from './login/Login';
import Header from './common/Header'
import Layout from './dashboard/Layout';
import Home from './dashboard/Home';
import AboutUs from './dashboard/AboutUs';
import Contact from './dashboard/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import AssignmentReducers from './reducers';

let store = createStore(AssignmentReducers)

const Assignment = () => (
  <div className="App">
    <Header/>
    <div className="App-main">
      <Provider store={store}>
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
      </Provider>
    </div>
  </div>
)

export default Assignment;
