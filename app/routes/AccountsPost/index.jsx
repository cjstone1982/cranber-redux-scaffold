'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Button} from 'antd';

const AccountsPostIndex = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
  },

  render() {
    return (
      <div>
      </div>
    );
  }
});

export default connect(
  state => (state.Accounts)
)(AccountsPostIndex);
