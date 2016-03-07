"use strict";

import React from 'react';
import Manage from './Manage';
import Loader from './Loader';

const App = React.createClass({
  render() {
    return (
      <div style={{height: '100%'}}>
        {this.props.children}
      </div>
    );
  }
});

export default App;
