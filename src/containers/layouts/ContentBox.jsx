"use strict";

import React from 'react';
import {Router, Route, Link} from 'react-router';
import {Breadcrumb, QueueAnim} from 'antd';
import Loader from '../Loader';

const ContentBox = React.createClass({
  render() {
    return (
      <div className="layout-contentbox clearfix">
        {this.props.children}
      </div>
    );
  }
});

export default ContentBox;
