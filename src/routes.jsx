"use strict";

import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './layouts/App';
import Manage from './layouts/Manage';
import FormPage from './pages/FormPage';
import ChartPage from './pages/ChartPage';
import Login from './layouts/Login';
import DashBoard from './pages/DashBoard';

const Routes = React.createClass({
  getInitialState() {
    return {
      isLogin: false
    }
  },
  componentDidMount() {
  },
  checkLogin(next, replace) {
    if (0) {
      replace('/login');
    }
  },
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={App} >
          <Route path="/login" component={Login} />
          <Route path="/" component={Manage} onEnter={this.checkLogin}>
            <IndexRoute component={DashBoard}/>
            <Route path="form" component={FormPage} />
            <Route path="login" component={ChartPage} />
          </Route>
        </Route>
      </Router>
    );
  }
});

export default Routes;
