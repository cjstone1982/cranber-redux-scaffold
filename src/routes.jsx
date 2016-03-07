"use strict";

import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from './component/App';
import Manage from './component/Manage';
import FormPage from './pages/FormPage';
import ChartPage from './pages/ChartPage';
import Login from './component/Login';
import DashBoard from './pages/DashBoard';

const Routes = React.createClass({
  getInitialState() {
    return {
      isLogin: false
    }
  },
  componentWillMount() {

  },
  checkLogin() {

  },
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Manage} >
            <IndexRoute component={DashBoard} />
          </IndexRoute>
          <Route path="/" component={Manage} >
            <Route path="form" component={FormPage} />
            <Route path="chart" component={ChartPage} />
          </Route>
          <Route path="login" component={Login} />
        </Route>
      </Router>
    );
  }
});

export default Routes;
