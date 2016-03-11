"use strict";

import React from 'react';
import classNames from 'classnames';
import '../stylesheets/card.css';

const Card = React.createClass({
  render() {
    let cols = `col-${this.props.col || 8}`,
        classes = classNames('card-container', cols);
    return (
      <div className={classes}>
        <div className="card">
          {this.props.title ? <div className="card-title">{this.props.title}</div>: null}
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default Card;
