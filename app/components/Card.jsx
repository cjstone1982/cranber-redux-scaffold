"use strict";

import React from 'react';
import classNames from 'classnames';
import '../stylesheets/card.css';

const Card = React.createClass({
  render() {
    let cols = `col-${this.props.col || 8}`,
        classes = classNames('card-container', cols);
    return (
      <div className={classes + ' ' + this.props.className}>
        <div className="card" style={this.props.style}>
          {
            this.props.title ?
              <div className="card-title">{this.props.title}</div> :
              ''
          }
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default{
  Card: Card
} ;
