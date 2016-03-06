"use strict";

import React from 'react';
import Sidebar from './Sidebar';
import ContentBox from './ContentBox';
import Header from './Header';
import Loader from './Loader';

const App = React.createClass({
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Sidebar />
        <ContentBox />
      </div>
    );
  }
});

export default App;
