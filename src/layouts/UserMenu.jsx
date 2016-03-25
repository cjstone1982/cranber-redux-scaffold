'use strict';

import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import Store from '../store';
import {LOGOUT} from '../constants';

import avatar_pic from '../images/avatar.png';

const MenuFunc = {
  logout() {
    Store.dispatch({type: LOGOUT});
  },
  message() {

  }
};

const clickMenu = ({key}) => {
  MenuFunc[key] && MenuFunc[key]();
};

const menu = (
  <Menu onClick={clickMenu}>
    <Menu.Item key="message">
      <span>通知</span>
    </Menu.Item>
    <Menu.Item key="logout">
      <span>退出</span>
    </Menu.Item>
  </Menu>
);

const UserMenu = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
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
