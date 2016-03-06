"use strict";

import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <div className="layout-header">
        <img src="/src/images/logo.png" className="header-logo" />
      </div>
    );
  }
});

export default Header;
