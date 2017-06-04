import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material Components
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class User extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <List className="user">
        <ListItem
          disabled
          leftAvatar={<Avatar />}
        >
           {this.props.name}
        </ListItem>
      </List>
    );
  }
}

export default User;
