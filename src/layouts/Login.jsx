'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Icon, message } from 'antd';
import { loginStartAction, logoutAction } from '../actions/authActions';
import '../stylesheets/login.css';

const FormItem = Form.Item;

const FormData = React.createClass({
  propTypes: {
    isLogin: PropTypes.bool.isRequired,
    loginSub: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      loading: false
    };
  },
  render() {
    return (
      <Form horizontal>
        <FormItem>
          <Input placeholder="用户名"/>
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码"/>
        </FormItem>
        <Button type="primary"
                loading={ this.state.loading }
                onClick={ this.props.loginSub } >
          登录
        </Button>
      </Form>
    );
  }
});
const FormPart = Form.create()(FormData);

//@connect(state => { isLogin: state.AuthReducer.isLogin})
const Login = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  loginSubmit() {
    this.props.dispatch(loginStartAction('guox', 'test')).then( () => {
      this.context.router.push('/');
    });
  },
  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo">
            <img src="/src/images/logo.png" />
          </div>
          <FormPart isLogin={ this.props.isLogin }
                    loginSub={ this.loginSubmit } />
        </div>
      </div>
    );
  }
});

//connect component with dispatch propType
export default connect(
  state => ({ isLogin: state.AuthReducer.isLogin})
)(Login);
