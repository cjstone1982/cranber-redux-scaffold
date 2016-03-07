'use strict';

import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';

import avatar_pic from '../images/avatar.png';

const menu = (
  <Menu>
    <Menu.Item>
      <span>通知</span>
    </Menu.Item>
    <Menu.Item>
      <span>退出</span>
    </Menu.Item>
  </Menu>
);

const UserMenu = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  userLogOut() {
    this.context.router.push('/login');
  },
  render() {
    return (
      <div className="layout-menu-user">
        <Dropdown overlay={menu} trigger={['click']}>
          <div>
            <img className="avatar" src={avatar_pic} />
            <Icon type="down" />
          </div>
        </Dropdown>
      </div>
    );
  }
});

export default UserMenu;
