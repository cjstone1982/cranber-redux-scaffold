import React from 'react';
import {connect} from 'react-redux';
import {message} from 'antd';
import {closeMessageAction} from '../../actions/message.action';
import './app.css';

@connect(
  state => ({
    message: message
  })
)
class App extends React.Component {
  static propTypes = {
    Message: React.PropTypes.shape({
      content: React.PropTypes.string,
      type: React.PropTypes.oneOf(['error', 'success', 'info', 'loading']),
      show: React.PropTypes.bool
    }),
    dispatch: React.PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  checkMessage() {
    if (this.props.message.show) { //其他state的改变回引起多次执行
      message[this.props.message.type](this.props.message.content);
      this.props.dispatch(closeMessageAction());
    }
  }

  componentDidUpdate() {
    this.checkMessage();
  }

  render() {
    return (
      <div style={{height: '100%', minWidth: '900px'}}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
