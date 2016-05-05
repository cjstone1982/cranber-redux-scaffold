'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Modal, Form, Button, Input, Radio} from 'antd';
import fetch from 'isomorphic-fetch';
import {base_url} from '../../config/app';
import Store from '../../store';
import {getAccountsStartAction} from '../../actions/accountsAction';
import {OpenMessageAction} from '../../actions/messageActions';

import field from './field';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;


function dispatchMsg(type, msg) {
  Store.dispatch({
    type: 'OpenMessage',
    payload: {
      show: true,
      type: 'error',
      content: msg,
      method: 'message'
    }
  });
}

function handleDelete(id) {
  const token = Store.getState().Auth.session.token;
  fetch(`${base_url}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: `token=${token}&id=${id}`
  })
    .then(res => res.json())
    .then( json => {
      if (json['result_code'] != '20001') {
        dispatchMsg('error', json.msg);
      } else {
        dispatchMsg('success', '删除成功');
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

const AccountsIndex = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.array.isRequired
  },
  getInitialState() {
    return {
      selectedRowKeys: [],
      loading: false,
      editRecord: {},
      editVisible: false
    };
  },
  componentDidMount() {
    this.props.dispatch(getAccountsStartAction()).then(res => {

    });
  },
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys });
  },
  showEditModal() {
    this.setState({
      editVisible: true
    })
  },
  deleteGroup() {

  },
  hideEditModal() {
    this.setState({
      editVisible: false
    });
  },
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.deleteGroup}
                  disabled={!hasSelected} loading={loading}>删除</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          onRowClick={(record, index, e) => {
                  let target = e.target;
                  if (target.className === 'edit-btn') {
                   // this.setState({
                   //   editRecord: record
                   // });
                   //this.showEditModal();
                  }
               }}
          dataSource={this.props.data}
          rowKey={record => record.accountId} />
      </div>
    );
  }
});

export default connect(
  state => (state.Accounts)
)(AccountsIndex);
