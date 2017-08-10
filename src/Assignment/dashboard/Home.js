import React, { Component } from 'react';
import { connect } from 'react-redux';
import getUserDetails from '../store'

class Home extends Component {
  render() {
    const name = localStorage.getItem('userName');
    return (
      <div className="App-page">
        <h2>Welcome {this.props.userName || name}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: getUserDetails(state, "GET_USERNAME")
  }
}

const HomeComponent = connect(
  mapStateToProps,
  null
)(Home)

export default HomeComponent;
