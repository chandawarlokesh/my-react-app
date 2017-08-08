import React, { Component } from 'react';
import Counter from './counter'
import './index.css'

function WelcomeFunc(props) {
  return <h2>Hello, {props.name}</h2>
}

var WelcomeClass = React.createClass({
    getInitialState: function() {
      return {
        count: 2,
        isMounted: true
      }
    },

    getDefaultProps: function() {
      return {
        count: 2,
        isMounted: true
      }
    },

    render: function() {
        return <h2>Hello, {this.props.name}</h2>
    }
})

const WelcomeLambdaFunc = props => (
  <h2>Hello, {props.name}</h2>
)

class WelcomeClassES6 extends React.Component {
  render() {
    return <h2>Hello, {this.props.name}</h2>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      isMounted: true
    };
  }
  
  handleChange = (e) => {
    this.setState({
      count: parseInt(e.target.value)
    })
  }
  
  toggleMounting = (e) => {
    this.setState({
      isMounted: !this.state.isMounted
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to React</h1>

          <WelcomeFunc name="WelcomeFunc"/>
          <WelcomeClass name="WelcomeClass"/>
          <WelcomeLambdaFunc name="WelcomeLambdaFunc"/>
          <WelcomeClassES6 name="WelcomeClassES6"/>

          {
            this.state.isMounted ?
            <Counter count={this.state.count}/>
            :
            <div>
              {"counter component unmounted.."}
            </div>
          }

          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.count}/>
          <button
            className="toggle-button"
            onClick={this.toggleMounting}>
            {"ToggleMounting"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
