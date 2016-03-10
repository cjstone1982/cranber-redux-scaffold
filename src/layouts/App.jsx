"use strict";

import React from 'react';
import '../stylesheets/app.css';

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
