"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Store from './store';
import App from './components/App/app.component';
import Manage from './components/Manage/manage.component';
//pages
import Login from './pages/Login/login.page';
import AccountsIndex from './pages/Accounts/index';
import DashBoardIndex from './pages/Dashboard/index.page';

const history = syncHistoryWithStore(hashHistory, Store);

const Routes = React.createClass({
  checkLogin(next, replace) {
    let isLogin = Store.getState().Auth.isLogin;
    if (!isLogin && !this.checkLocalSession()) {
      replace('/login');
    }
  },
  checkLocalSession() {
    let localToken = window.localStorage.getItem('session');
    //TODO: verify token
    if (localToken) {
      Store.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: localToken
        }
      });
      return true;
    } else {
      return false;
    }
  },
  render() {
    return (
      <Provider store={Store}>
        <Router history={history}>
          <Route component={App} >
            <Route path="/login" component={Login} />
            <Route path="/" component={Manage} onEnter={this.checkLogin}>
              <IndexRoute component={DashBoardIndex}/>
              <Route path="accounts" component={AccountsIndex} />
            </Route>
          </Route>
          <Redirect from="*" to="/" />
        </Router>
      </Provider>
    );
  }
});

export default Routes;
