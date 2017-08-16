import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin',
      password: 'password'
    };
  }

  onClick = () => {
    this.props.history.replace('/home')
  }

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
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
                                <input type="text" className="form-control" value={this.state.userName} name="userName" onChange={this.handleUserName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.handlePassword}/>
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

export default Login;
