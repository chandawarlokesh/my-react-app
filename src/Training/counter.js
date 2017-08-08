import React, { Component } from 'react';
import './counter.css'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 1
    };
    this.incrementCount = this.incrementCount.bind(this)
  }

  componentWillMount() { //can't update state here
    console.log("calling componentWillMount() func");
  }

  componentDidMount() {
    console.log("calling componentDidMount() func");
  }

  componentWillReceiveProps(nextProps) {
    console.log("calling componentWillReceiveProps(nextProps) func");
    console.log("nextProps:", nextProps);
    if (this.props.count !== nextProps.count) {
      this.setState({
        count: nextProps.count
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("calling shouldComponentUpdate(nextProps, nextState) func");
    console.log("nextProps:", nextProps);
    console.log("nextState:", nextState);
    const isUpdating = this.props.count !== 100 || nextState.count !== 100;
    console.log("Is component updating: ", isUpdating);
    return isUpdating;
  }

  componentWillUpdate(nextProps, nextState) { //can't update state here
    console.log("calling componentWillUpdate(nextProps, nextState) func");
    console.log("nextProps:", nextProps);
    console.log("nextState:", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("calling componentDidUpdate(prevProps, prevState) func");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
  }

  componentWillUnmount() { //can't update state here
    console.log("calling componentWillUnmount() func");
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const buttonStyle = {
      padding: '5px 10px',
      margin: '5px',
      background: 'blue',
      color: 'white'
    }
    return (
      <div className="Counter">
        <button
          onClick={this.decrementCount}
          style={ buttonStyle }>
          {'-'}
        </button>
        <span className="count-value">
          {this.state.count}
        </span>
        <button
          onClick={this.incrementCount}
          style={ buttonStyle }>
          {'+'}
        </button>
      </div>
    );
  }
}
