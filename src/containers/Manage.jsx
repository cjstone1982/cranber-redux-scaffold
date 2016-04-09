'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './layouts/Sidebar';
import ContentBox from './layouts/ContentBox';
import Header from './layouts/Header';
import {StoreSession, loginSuccessAction} from '../actions/authActions';

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
