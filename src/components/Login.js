import React, { Component } from 'react';

const validateUser = (userName, password) => userName === "admin" && password === "password"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin',
      password: 'password',
      errorMessage: null
    };
  }

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
      errorMessage: null
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
      errorMessage: null
    })
  }

  handleLogin = () => {
    const { userName, password } = this.state
    if (validateUser(userName, password)) {
      localStorage.setItem('isLoggedIn', true);
      this.props.router.replace("/main");
    } else {
      this.setState({
        errorMessage: "Invalid Credentials!"
      })
    }

  }

  render() {
    return (
      <div className="App-page">
         <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-md-6 col-md-offset-3 holiday-lhs">
                        <form name="form">
                            {
                              this.state.errorMessage !== null ?
                                <div className="errorMessage">{this.state.errorMessage}</div>
                              :
                                null
                            }
                            <div className="form-group text-align-left">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" value={this.state.userName} name="userName" onChange={this.handleUserName}/>
                            </div>
                            <div className="form-group text-align-left">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.handlePassword}/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="button" id="login" onClick={this.handleLogin}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
