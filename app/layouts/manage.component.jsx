'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './sidebar.component';
import ContentBox from './contentBox.component';
import Header from './header.component';
import {StoreSession, loginSuccessAction} from '../actions/auth.action';

const Manage  = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  checkLogin() {
    if (!this.props.Auth.isLogin) {
      this.context.router.push('/login');
    }
  },
  componentDidUpdate() {
    this.checkLogin();
  },
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
        <Sidebar />
        <ContentBox children={this.props.children} />
      </div>
    );
  }
});

export default connect(
  state => ({
    Auth: state.Auth
  })
)(Manage);
