"use strict";

import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Store from './store';
/*
 * components
 */
import App from './layouts/App';
import Manage from './layouts/Manage';
import Login from './layouts/Login';
import FormPage from './pages/FormPage';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import DashBoard from './pages/DashBoard';

const history = syncHistoryWithStore(hashHistory, Store);

const Routes = React.createClass({
  getInitialState() {
    return {

    };
  },
  checkLogin(next, replace) {
    if (0) {
      replace('/login');
    }
  },
  render() {
    return (
      <Provider store={Store}>
        <Router history={history}>
          <Route component={App} >
            <Route path="/login" component={Login} />
            <Route path="/" component={Manage} onEnter={this.checkLogin}>
              <IndexRoute component={DashBoard}/>
              <Route path="form" component={FormPage} />
              <Route path="chart" component={ChartPage} />
              <Route path="table" component={TablePage} />
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
});

export default Routes;
