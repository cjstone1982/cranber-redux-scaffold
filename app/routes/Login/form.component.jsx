import React from 'react';
import {Form, Input, Button} from 'antd';
import {autobind} from 'core-decorators';

const FormItem = Form.Item;

class FormData extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool.isRequired,
    loginHandler: React.PropTypes.func.isRequired
  }

  @autobind()
  handleSubmit(e) {
    e.preventDefault();
    let formValue = this.props.form.getFieldsValue();
    this.props.loginHandler(formValue.username, formValue.password);
  }

  render() {
    const {getFieldProps} = this.props.form;

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem>
          <Input placeholder="用户名" {...getFieldProps('username')}/>
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码" {...getFieldProps('password')}/>
        </FormItem>
        <Button type="primary"
                loading={ this.props.loading }
                htmlType="submit" >
          登录
        </Button>
      </Form>
    );
  }
}

export default Form.create()(FormData);
