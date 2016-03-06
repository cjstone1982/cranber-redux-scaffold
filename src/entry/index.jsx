import React from 'react';
import ReactDOM from 'react-dom';
import '../common/lib';
import {Router, Route, Link, hashHistory} from 'react-router';
import App from '../component/App';
import LoginPage from '../component/Login.jsx';

const routerConfig = [
  {
    path: '/',
    indexRoute: {component: LoginPage},
    childrenRoutes: [
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
ReactDOM.render((
  <Router
    history={hashHistory}
    routes={routerConfig}>
  </Router>
), document.getElementById('app'));
