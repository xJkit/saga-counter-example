import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './styles/App.css';

import { connect } from 'react-redux';
import * as actions from './actions';
import User from './User';

// Material UI Components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import RaisedButton from 'material-ui/RaisedButton';
import { green500, redA200 } from 'material-ui/styles/colors';

const styles = {
  counterStyle: {
    add: {
      backgroundColor: green500,
    },
    remove: {
      backgroundColor: redA200,
    },
  },
  asyncStyle: {
    color: 'white',
  },
}

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
          <h2>Welcome to React + Material UI</h2>
        </div>
        <div className="App-intro">
          <div className="meter">{count}</div>
          <div className="btn-group">
            <FloatingActionButton
              onClick={() => this.handleIncrement({})}
              backgroundColor={styles.counterStyle.add.backgroundColor}
            >
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onClick={() => this.handleDecrement({})}
              backgroundColor={styles.counterStyle.remove.backgroundColor}
            >
              <ContentRemove />
            </FloatingActionButton>
          </div>
          <div className="btn-group">
            <FloatingActionButton
              onClick={() => this.handleIncrement({ asyn: true })}
              style={styles.asyncStyle.color}
            >
              async +
            </FloatingActionButton>
            <FloatingActionButton
              onClick={() => this.handleDecrement({ asyn: true })}
              style={styles.asyncStyle.color}
            >
              async -
            </FloatingActionButton>
          </div>
          <div className="btn-group">
            <RaisedButton
              onClick={() => this.handleFetchUsers()}
              label="fetch users"
              secondary
            />
          </div>
          <div className="display-panel">
            {users.length ?
              users.map((user, index) => <User key={index} name={user} /> )
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
