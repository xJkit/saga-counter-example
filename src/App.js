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
    asyncCountClick: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
  };

  handleIncrement = ({ byNumber }) => () => {
    this.props.countClick({ byNumber });
    console.log('execute!')
  }

  handleAsyncIncrement = ({ byNumber }) => () => {
    this.props.asyncCountClick({ byNumber });
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
              onTouchTap={this.handleIncrement({ byNumber: 1 })}
              backgroundColor={styles.counterStyle.add.backgroundColor}
            >
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton
              onTouchTap={this.handleIncrement({ byNumber: -1 })}
              backgroundColor={styles.counterStyle.remove.backgroundColor}
            >
              <ContentRemove />
            </FloatingActionButton>
          </div>
          <div className="btn-group">
            <FloatingActionButton
              onTouchTap={this.handleAsyncIncrement({ byNumber: 1 })}
              style={styles.asyncStyle}
            >
              async +
            </FloatingActionButton>
            <FloatingActionButton
              onTouchTap={this.handleAsyncIncrement({ byNumber: -1 })}
              style={styles.asyncStyle}
            >
              async -
            </FloatingActionButton>
          </div>
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
  asyncCountClick: actions.counter.asyncCountClick,
  getUsers: actions.users.getUsers,
})(App);
