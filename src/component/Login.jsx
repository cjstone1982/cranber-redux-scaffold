'use strict';

import React from 'react';
import '../stylesheets/login.css';
import {History} from 'react-router';
import {Button, Form, Input, Icon} from 'antd';

const FormItem = Form.Item;

const FormData = React.createClass({
  mixins: [History],
  getInitialState() {
    return {
      loading: false
    };
  },
  loginSubmit() {
    this.setState({
      loading:true
    });
    this.history.push(null, '/');
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
        <Button type="primary" loading={this.state.loading} onClick={this.loginSubmit}>
          登录
        </Button>
      </Form>
    );
  }
});
const FormPart = Form.create()(FormData);

const LoginPage = React.createClass({
  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo">
            <img src="/src/images/logo.png" />
          </div>
          <FormPart />
        </div>
      </div>
    );
  }
});

export default LoginPage;
