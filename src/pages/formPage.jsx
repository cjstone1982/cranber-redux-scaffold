'use strict';

import React from 'react';
import {Form, button, Input} from 'antd';
import Card from '../components/Card';

const FormItem = Form.Item;

const FormBase = React.createClass({
  render() {
    return (
      <Form horizontal>
        <FormItem>
          <Input />
        </FormItem>
      </Form>
    );
  }
});

const FormComponent = Form.create()(FormBase);

const FormPage = React.createClass({
  render() {
    return (
      <div>
        <Card title="测试">
          <FormComponent />
        </Card>
      </div>
    );
  }
});

export default FormPage;
