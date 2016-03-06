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
           style={{ width: 240 }}>
      <Menu onClick={this.handleClick}
            style={{ width: 240, height: '100%'}}
            defaultOpenKeys={['sub1']}
            theme="dark-blue"
            selectedKeys={[this.state.current]}
            mode="inline">
        <Menu.Item key="1">
          <Link to="/"><Icon type="appstore" /><span>面板</span></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/form"><Icon type="appstore" /><span>表单</span></Link>
        </Menu.Item>
        <SubMenu key="sub2"
          title={<span><Icon type="appstore" /><span>组件</span></span>}>
          <Menu.Item key="5">
            <Link to="/chart"><Icon type="appstore" /><span>表单</span></Link>
          </Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    );
  }
});

export default Sidebar;
