import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
  };

  handleIncrement({ asyn = false }) {
    const { increment, incrementAsync } = this.props;
    asyn ? incrementAsync({ delay: 2000 }) : increment();
  }

  handleDecrement({ asyn = false }) {
    const { decrement, decrementAsync } = this.props;
    asyn ? decrementAsync({ delay: 2000 }) : decrement();
  }

  handleFetchUsers() {
    this.props.getUsers();
  }

  render() {
    const { count, users } = this.props;
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
          <div className="btn-group">
            <button onClick={() => this.handleFetchUsers()}>fetch users</button>
          </div>
          <div className="display-panel">
            {users.length ?
              <ul className="user-list">
                {users.map((user, index) =><li key={index}>{user}</li> )}
              </ul>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  users: state.users,
});

export default connect(mapStateToProps, {
  increment: actions.counter.increment,
  incrementAsync: actions.counter.incrementAsync,
  decrement: actions.counter.decrement,
  decrementAsync: actions.counter.decrementAsync,
  getUsers: actions.users.getUsers,
})(App);
