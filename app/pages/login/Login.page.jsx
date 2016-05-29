'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Input, Icon, message} from 'antd';
import {loginStartAction, logoutAction} from '../../actions/auth.action';
import '../../stylesheets/login.css';

const FormItem = Form.Item;

const FormData = React.createClass({
  propTypes: {
    isLogin: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loginHandler: PropTypes.func.isRequired
  },
  handleSubmit(e) {
    e.preventDefault();
    let formValue = this.props.form.getFieldsValue();
    this.props.loginHandler(formValue.username, formValue.password);
  },
  render() {
    const {getFieldProps} = this.props.form;

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem>
          <Input placeholder="用户名" {...getFieldProps('username')}/>
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码" {...getFieldProps('password')}/>
        </FormItem>
        <Button type="primary"
                loading={ this.props.isLoading }
                htmlType="submit" >
          登录
        </Button>
      </Form>
    );
  }
});
const FormPart = Form.create()(FormData);

//@connect(state => {..})
const Login = React.createClass({
  propTypes: {
    dispatch: PropTypes.func.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  loginHandler(username, password) {
    this.props.dispatch(loginStartAction(username, password)).then( () => {
      this.context.router.push('/');
    });
  },
  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo"></div>
          <FormPart isLogin={this.props.isLogin}
                    isLoading={this.props.isLoading}
                    loginHandler = {this.loginHandler} />
        </div>
      </div>
    );
  }
});

//connect component with dispatch propType
export default connect(
  state => (state.Auth)
)(Login);
