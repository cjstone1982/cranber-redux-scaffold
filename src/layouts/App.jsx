"use strict";

import React from 'react';
import '../stylesheets/app.css';

const App = React.createClass({
  render() {
    return (
      <div style={{height: '100%', minWidth: '1200px'}}>
        {this.props.children}
      </div>
    );
  }
});

export default App;
