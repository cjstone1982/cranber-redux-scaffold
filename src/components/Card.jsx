"use strict";

import React from 'react';
import '../stylesheets/card.css';

const Card = React.createClass({
  render() {
    return (
      <div className="col-12 card-container">
        <div className="card">
          <div className="card-title">
            {this.props.title}
          </div>
          <div className="card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default Card;
