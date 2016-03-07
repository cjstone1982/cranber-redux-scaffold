'use strict';

import React from 'react';
import Sidebar from './Sidebar';
import ContentBox from './ContentBox';
import Header from './Header';

const Manage  = React.createClass({
  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
        <Sidebar />
        <ContentBox children={this.props.children} />
      </div>
    );
  }
});

export default Manage;
