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
    countClick: PropTypes.func.isRequired,
    takeEveryCountClick: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
  };

  handleIncrement = (byNumber) => () => {
    this.props.countClick(byNumber);
  }

  handleTakeEveryIncrement = (byNumber) => () => {
    this.props.takeEveryCountClick(byNumber);
  }

  handleTakeLatestIncrement = (byNumber) => () => {
    this.props.takeLatestCountClick(byNumber);
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



          <h3>Without Saga</h3>
          <h6>(OS: sync counter)</h6>
          <div className="btn-group">
            <FloatingActionButton
              onTouchTap={this.handleIncrement(1)}
              backgroundColor={styles.counterStyle.add.backgroundColor}
            >
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onTouchTap={this.handleIncrement(-1)}
              backgroundColor={styles.counterStyle.remove.backgroundColor}
            >
              <ContentRemove />
            </FloatingActionButton>
          </div>




          <h3>Saga: TakeEvery Increment (delay 500ms)</h3>
          <div className="btn-group">
            <FloatingActionButton
              onTouchTap={this.handleTakeEveryIncrement(1)}
              style={styles.asyncStyle}
            >
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onTouchTap={this.handleTakeEveryIncrement(-1)}
              style={styles.asyncStyle}
            >
              <ContentRemove />
            </FloatingActionButton>
          </div>



          <h3>Saga: TakeLatest Increment (delay 500ms)</h3>
          <div>(O.S: previous action will be cancelled)</div>
          <div className="btn-group">
            <FloatingActionButton
              onTouchTap={this.handleTakeLatestIncrement(1)}
              style={styles.asyncStyle}
            >
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onTouchTap={this.handleTakeLatestIncrement(-1)}
              style={styles.asyncStyle}
            >
              <ContentRemove />
            </FloatingActionButton>
          </div>






          <h3>Api Request</h3>
          <div className="btn-group">
            <RaisedButton
              onTouchTap={() => this.handleFetchUsers()}
              label="fetch users"
              secondary={true}
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
  countClick: actions.counter.countClick,
  takeEveryCountClick: actions.counter.takeEveryCountClick,
  takeLatestCountClick: actions.counter.takeLatestCountClick,
  getUsers: actions.users.getUsers,
})(App);
