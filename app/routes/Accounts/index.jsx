'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Button} from 'antd';
import {getAccounts} from '../../actions/accounts.action';
import field from './field';

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
      editRecord: {}
    };
  },

  componentDidMount() {
    this.props.dispatch(getAccounts()).then(res => {});
  },

  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys });
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
          <Button type="primary" disabled={!hasSelected} loading={loading}>删除</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          onRowClick={(record, index, e) => {
                  let target = e.target;
                  if (target.className === 'edit-btn') {}
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
