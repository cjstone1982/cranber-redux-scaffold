"use strict";

import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <div className="layout-header">
        <Link to="/">
          <img src="/src/images/logo.png" className="header-logo" />
        </Link>
      </div>
    );
  }
});

export default Header;
