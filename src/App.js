import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as counterActions from './actions/counter.js';

class App extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
  };

  handleIncrement({ asyn = false }) {
    const { increment, incrementAsync } = this.props;
    asyn ? incrementAsync({ delay: 1 }) : increment();
  }

  handleDecrement({ asyn = false }) {
    const { decrement, decrementAsync } = this.props;
    asyn ? decrementAsync({ delay: 1 }) : decrement();
  }

  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="meter">{count}</div>
          <div className="btn-group">
            <button onClick={() => this.handleIncrement({})}>+</button>
            <button onClick={() => this.handleDecrement({})}>-</button>
          </div>
          <div className="btn-group">
            <button onClick={() => this.handleIncrement({ asyn: true })}>async +</button>
            <button onClick={() => this.handleDecrement({ asyn: true })}>async -</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps, {
  increment: counterActions.increment,
  incrementAsync: counterActions.incrementAsync,
  decrement: counterActions.decrement,
  decrementAsync: counterActions.decrementAsync,
})(App);
