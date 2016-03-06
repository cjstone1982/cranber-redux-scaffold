"use strict";

import React from 'react';
import {Form, button, Input} from 'antd';
const FormItem = Form.Item;

const FormPage = React.createClass({
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

export default Form.create()(FormPage);
