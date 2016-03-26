"use strict";

import React from 'react';
import {Link} from 'react-router';
import UserMenu from './UserMenu';

import logo_pic from '../../images/logo.png';

const Header = React.createClass({
  render() {
    return (
      <div className="layout-header">
        <Link to="/">
          <img src={logo_pic} className="header-logo" />
        </Link>
        <UserMenu />
      </div>
    );
  }
});

export default Header;
