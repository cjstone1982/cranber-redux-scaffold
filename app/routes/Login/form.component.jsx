import React, {PropTypes} from 'react';
import {Form} from 'antd';
import {autobind} from 'core-decorators';

const FormItem = Form.Item;

class FormData extends React.Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    loginHandler: PropTypes.func.isRequired
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
                loading={ this.props.isLoading }
                htmlType="submit" >
          登录
        </Button>
      </Form>
    );
  }
}

export default Form.create()(FormData);
