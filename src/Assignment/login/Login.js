import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserName, setPassword } from '../actions'
import getUserDetails from '../store'
import './Login.css';
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import has from 'lodash/has'
import get from 'lodash/get'

class Login extends Component {

  componentDidMount() {
    window.addEventListener('message', this.redirectToMain, false);
    // const { history } = this.props
    // window.addEventListener('message', function(event) {
    //   const {data, origin} = event;
    //   console.log(data, origin);
    //   if (data && isObject(data) && origin) {
    //     isFunction(window.getUserData) && window.getUserData("64f52208-2085-4a73-b251-7528587dc3e7","2")
    //       .then(function (e) {
    //         if(e.target.response.StatusCode === 200) {
    //           history.replace('/home')
    //         }
    //         console.log('Result ', e.target.response);
    //       })
    //       .catch(function (e) {
    //         console.log('Hello error ', e);
    //       });
    //   }
    // },false);
  }

  redirectToMain = (event) => {
    console.log('Event Object : ', event);
      if (!has(event, 'data.data')) {
        const { data } = event;
        if (data !== "" && !isObject(data)) {
          const eventData = JSON.parse(data);
          const { appId, token } = eventData
          localStorage.setItem('appId', appId);
          localStorage.setItem('token', token);
          console.log('token value :', token,' app=', appId);
          this.getUserList(token, appId);
        }
      }
  }

  getUserList = (token, appId) => {
    const { history } = this.props
    isFunction(window.getUserData) && window.getUserData(token, appId)
      .then(function (e) {
        const response = JSON.parse(e.target.response);
        console.log('Result ', response);
        localStorage.setItem('userName', get(response, 'Data.userName', null));
        const roleName = response['Data']['role'][0]['roleName']
        localStorage.setItem('role', roleName === 'admin' ? roleName : 'role');
        history.replace('/home');
      }, function (e) {
        // handle errors
        console.log('Hello error ', e);
      });
  }

  onClick = () => {
    if( this.props.userName === "admin" && this.props.password === "password") {
      this.props.history.replace('/home')
    }
  }

  handleUserName = (e) => {
    this.props.onUserNameChange(e.target.value)
  }

  handlePassword = (e) => {
    this.props.onPasswordChange(e.target.value)
  }

  render() {
    return (
      <div className="App-page">
         <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-md-6 col-md-offset-3 holiday-lhs">
                        <form name="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" value={this.props.userName} name="userName" onChange={this.handleUserName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" value={this.props.password} name="password" onChange={this.handlePassword}/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="button" id="login" onClick={this.onClick}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: getUserDetails(state, "GET_USERNAME"),
    password: getUserDetails(state, "GET_PASSWORD")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserNameChange: data => {
      dispatch(setUserName(data))
    },
    onPasswordChange: data => {
      dispatch(setPassword(data))
    }
  }
}

const LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginComponent;
