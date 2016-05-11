"use strict";

import React from 'react';
import {Breadcrumb, QueueAnim} from 'antd';

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
