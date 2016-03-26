'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './layouts/Sidebar';
import ContentBox from './layouts/ContentBox';
import Header from './layouts/Header';

const Manage  = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  checkLogin() {
    if (!this.props.Login.isLogin) {
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
    Login: state.Login,
    User: state.User
  })
)(Manage);
