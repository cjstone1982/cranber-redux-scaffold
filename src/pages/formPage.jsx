'use strict';

import React from 'react';
import {Form, button, Input, Checkbox, Radio, Select, Col, DatePicker} from 'antd';
import Card from '../components/Card';

const FormItem = Form.Item,
      Option = Select.Option,
      RadioGroup = Radio.Group;

const FormBase = React.createClass({
  render() {
    return (
      <Form horizontal>
        <FormItem
          id="control-input"
          label="输入框："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Input id="control-input" placeholder="Please enter..." />
        </FormItem>

        <FormItem
          id="control-textarea"
          label="文本域："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Input type="textarea" id="control-textarea" rows="3" />
        </FormItem>

        <FormItem
          id="select"
          label="Select 选择器："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            < Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label="Checkbox 多选框："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }} >
          <label className="ant-checkbox-vertical">
            <Checkbox />选项一
          </label>
          <label className="ant-checkbox-vertical">
            <Checkbox />选项二
          </label>
          <label className="ant-checkbox-vertical">
            <Checkbox disabled />选项三（不可选）
          </label>
        </FormItem>

        <FormItem
          label="Checkbox 多选框："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }} >
          <label className="ant-checkbox-inline">
            <Checkbox />选项一
          </label>
          <label className="ant-checkbox-inline">
            <Checkbox />选项二
          </label>
          <label className="ant-checkbox-inline">
            <Checkbox />选项三
          </label>
        </FormItem>

        <FormItem
          label="Radio 单选框："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }} >
          <RadioGroup value="b">
            <Radio value="a">A</Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    );
  }
});

const ValidateForm = React.createClass({
  render() {
    return (
      <Form horizontal>
        <FormItem
          label="失败校验："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          validateStatus="error"
          help="请输入数字和字母组合">
          <Input defaultValue="无效选择" id="error" />
        </FormItem>

        <FormItem
          label="警告校验："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          validateStatus="warning">
          <Input defaultValue="前方高能预警" id="warning" />
        </FormItem>

        <FormItem
          label="校验中："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          hasFeedback
          validateStatus="validating"
          help="信息审核中...">
          <Input defaultValue="我是被校验的内容" id="validating" />
        </FormItem>

        <FormItem
          label="成功校验："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          hasFeedback
          validateStatus="success">
          <Input defaultValue="我是正文" id="success" />
        </FormItem>

        <FormItem
          label="警告校验："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          hasFeedback
          validateStatus="warning">
          <Input defaultValue="前方高能预警" id="warning" />
        </FormItem>

        <FormItem
          label="失败校验："
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          hasFeedback
          validateStatus="error"
          help="请输入数字和字母组合">
          <Input defaultValue="无效选择" id="error" />
        </FormItem>

        <FormItem
          label="Datepicker："
          labelCol={{ span: 5 }}
          help>
          <Col span="6">
            <FormItem validateStatus="error" help="请选择正确日期">
              <DatePicker />
            </FormItem>
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="6">
            <FormItem>
              <DatePicker />
            </FormItem>
          </Col>
        </FormItem>

        <FormItem
          label="Datepicker："
          labelCol={{ span: 5 }}
          validateStatus="error"
          help>
          <Col span="6">
            <DatePicker />
          </Col>
          <Col span="1">
            <p className="ant-form-split">-</p>
          </Col>
          <Col span="6">
            <DatePicker />
          </Col>
          <Col span="19" offset="5">
            <p className="ant-form-explain">请选择正确日期</p>
          </Col>
        </FormItem>
      </Form>
    );
  }
});

const FormComponent = Form.create()(FormBase);
const ValidateComponent = Form.create()(ValidateForm);

const FormPage = React.createClass({
  render() {
    return (
      <div>
        <Card title="测试">
          <FormComponent />
        </Card>
        <Card title="表单验证">
          <ValidateComponent />
        </Card>
      </div>
    );
  }
});

export default FormPage;
