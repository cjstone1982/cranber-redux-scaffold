'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Table, Modal, Form, Button, Input, Radio, Card, Col, Row} from 'antd';
import {baseUrl} from '../../config/app';
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
        <Row style={{padding: '20px 0'}}>
          <Col span="8">
            <Card title="账号信息" className="dashboard-user">
              <p className="item"><label>用户名: </label><span>xx</span></p>
              <p className="item"><label>用户组: </label><span>xx</span></p>
              <p className="item"><label>上次登录时间: </label><span>xx</span></p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span="12" style={{paddingRight: 10}}>
            <Card title="站点运行数据监控" style={{overflowX:'scroll'}}>
              <LineChart />
            </Card>
          </Col>
          <Col span="12" style={{paddingLeft: 10}}>
            <Card title="站点运行内容监控" style={{overflowX:'scroll'}}>
              <BarChart />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
});

export default connect(
  state => (state)
)(DashBoardIndex);
