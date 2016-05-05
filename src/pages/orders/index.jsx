'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Modal, Button, Form, Input, DatePicker} from 'antd';
import fetch from 'isomorphic-fetch';
import {base_url} from '../../config/app';
import Store from '../../store';
import {OpenMessageAction} from '../../actions/messageActions';
import {getOrdersStartAction} from '../../actions/ordersAction';
import field from './field';

const FormItem = Form.Item;

function handleDelete(record) {
  const token = Store.getState().Auth.session.token;
  fetch(`${base_url}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: `token=${token}&id=${record.id}`
  })
    .then(res => res.json())
    .then( json => {
      if (json.msg) {
        Store.dispatch({
          type: 'OpenMessage',
          payload: {
            show: true,
            type: 'error',
            content: 'json.msg',
            method: json.message
          }
        });
      } else {
        Store.dispatch({
          type: 'OpenMessage',
          payload: {
            show: true,
            type: 'success',
            content: '删除成功',
            method: 'message'
          }
        });
      }
    });
}

const columns = [
  ...field,
  {
    title: '操作',
    key: 'operation',
    render(text, record) {
      return (
        <span>
          <a className="edit-btn">编辑</a>
        </span>
      );
    }
  }
];
let data = [];

const OrdersIndex = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
  },
  getInitialState(){
    return {
      editLoading: false,
      editVisible: false,
      editRecord: {}
    }
  },
  componentDidMount() {
    this.props.dispatch(getOrdersStartAction()).then(() => {});
  },
  showEditModal() {
    this.setState({
      editVisible: true
    })
  },
  hideEditModal() {
    this.setState({
      editVisible: false
    });
  },
  render() {
    return (
      <div>
        <Table rowKey={record => record.orderId}
               columns={columns}
               onRowClick={(record, index, e) => {
                  let target = e.target;
                  if (target.className === 'edit-btn') {
                     this.showEditModal();
                  }
               }}
               dataSource={this.props.data} />
      </div>
    );
  }
});

export default connect(
  state => (state.Orders)
)(OrdersIndex);
