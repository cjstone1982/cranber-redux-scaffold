"use strict";

import React from 'react';
import {Router, Route, Link} from 'react-router';
import Loader from './Loader';

const ContentBox = React.createClass({
  render() {
    return (
      <div className="layout-contentbox">
        <Loader />
      </div>
    );
  }
});

export default ContentBox;
