"use strict";

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import App from './component/App';
import LoginPage from './component/Login.jsx';
import FormPage from './pages/FormPage.jsx';
import ChartPage from './pages/ChartPage.jsx';

const routerConfig = [
  {
    path: '/',
    component: App,
    childrenRoutes: [
      {path: 'form', component: FormPage},
      {path: 'chart', component: ChartPage}
    ]
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '*',
    component: App
  }
];

const Routes = React.createClass({
  checkLogin() {

  },
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="/form" component={FormPage} />
          <Route path="/chart" component={ChartPage} />
        </Route>
        <Route path="/login" component={LoginPage} />
      </Router>
    )
  }
});

export default Routes;
