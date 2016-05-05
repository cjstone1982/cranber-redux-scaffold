"use strict";

import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router';

const SubMenu = Menu.SubMenu;
const Sidebar = React.createClass({
  getInitialState() {
    return {
      current: '1'
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <div className="layout-sidebar"
           style={{ width: 210 }}>
        <div className="layout-title"></div>
        <Menu onClick={this.handleClick}
            style={{ width: 210}}
            defaultOpenKeys={['sub1']}
            theme="dark-blue"
            selectedKeys={[this.state.current]}
            mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="appstore" />用户管理</span>}>
          <Menu.Item key="1">
            <Link to="/accounts"><span>用户列表</span></Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" />订阅管理</span>}>
          <Menu.Item key="3">
            <Link to="/orders">订阅列表</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
});

export default Sidebar;
