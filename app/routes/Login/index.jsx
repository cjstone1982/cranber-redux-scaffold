import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Button, Input, Icon, message} from 'antd';
import {loginStartAction} from '../../actions/auth.action';
import './login.css';
import FormComponent from './form.component';
import {autobind} from 'core-decorators';

@connect(state => (state.Auth))
class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  @autobind()
  loginHandler(username, password) {
    this.props.dispatch(loginStartAction(username, password)).then( () => {
      this.context.router.push('/');
    });
  }

  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo"></div>
          <FormComponent isLogin={this.props.isLogin}
                    isLoading={this.props.isLoading}
                    loginHandler = {this.loginHandler} />
        </div>
      </div>
    );
  }
}

export default Login;
