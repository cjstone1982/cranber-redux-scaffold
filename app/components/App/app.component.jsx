import React from 'react';
import {connect} from 'react-redux';
import {message} from 'antd';
import {closeMessage} from '../../actions/message.action';
import './app.css';

const App = React.createClass({
  propTypes: {
    Message: React.PropTypes.shape({
      content: React.PropTypes.string,
      type: React.PropTypes.oneOf(['error', 'success', 'info', 'loading']),
      show: React.PropTypes.bool
    }),
    dispatch: React.PropTypes.func.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  checkMessage() {
    if (this.props.Message.show) { //其他state的改变回引起多次执行
      message[this.props.Message.type](this.props.Message.content);
      this.props.dispatch(closeMessage());
    }
  },
  componentDidUpdate() {
    this.checkMessage();
  },
  render() {
    return (
      <div style={{height: '100%', minWidth: '900px'}}>
        {this.props.children}
      </div>
    );
  }
});

export default connect(
  state => state
)(App);
