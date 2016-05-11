'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Modal, Form, Button, Input, Radio} from 'antd';
import {base_url} from '../../config/app';
import Store from '../../store';
import {Card} from '../../components/Card';
import LineChart from './lineChart.component';
import BarChart from './barChart.component';
import '../../stylesheets/pages/dashboard.css';

const DashBoardIndex = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
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

  },
  render() {
    return (
      <div>
        <div className="clearfix">
          <Card title="账号信息" className="dashboard-user">
            <p className="item"><label>用户名: </label><span>xx</span></p>
            <p className="item"><label>用户组: </label><span>xx</span></p>
            <p className="item"><label>上次登录时间: </label><span>xx</span></p>
          </Card>
        </div>
        <div>
          <Card title="站点运行数据监控" col="12" style={{overflowX:'scroll'}}>
            <LineChart />
          </Card>
          <Card title="站点运行内容监控" col="12" style={{overflowX:'scroll'}}>
            <BarChart />
          </Card>
        </div>
      </div>
    );
  }
});

export default connect(
  state => (state)
)(DashBoardIndex);
