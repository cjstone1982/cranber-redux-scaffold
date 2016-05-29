'use strict';

import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import Store from '../../store';
import {FlushSession} from '../../actions/auth.action';
import {LOGOUT} from '../../constants';

import avatar_pic from '../../../assets/images/avatar.png';

const MenuFunc = {
  logout() {
    window.localStorage.removeItem('session'); //need patch
    Store.dispatch({type: LOGOUT});
    window.location.hash = '#/';
  }
};

const clickMenu = ({key}) => {
  MenuFunc[key] && MenuFunc[key]();
};

const menu = (
  <Menu onClick={clickMenu}>
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
