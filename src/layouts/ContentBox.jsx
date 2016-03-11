"use strict";

import React from 'react';
import {Router, Route, Link} from 'react-router';
import {Breadcrumb, QueueAnim} from 'antd';
import Loader from './Loader';

const ContentBox = React.createClass({
  render() {
    return (
      <div className="layout-contentbox clearfix">
        <div className="breadcrumb-wrapper">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="#/">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="#/form">列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default ContentBox;
