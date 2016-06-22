import React from 'react';
import {connect} from 'react-redux';
import {Table, Button} from 'antd';
import {createAccount} from '../../actions/accounts.action';
import AccountForm from './form';

const AccountsPostIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
  },

  formSubmit(data) {
    this.props.dispatch(createAccount(data)).then(res => {
      this.context.router.push('accounts');
    });
  },

  render() {
    return (
      <div>
        <AccountForm formSubmit={this.formSubmit} />
      </div>
    );
  }
});

export default connect(
  state => (state.Accounts)
)(AccountsPostIndex);
