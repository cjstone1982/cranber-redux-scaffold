import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const BarChartComponent = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render () {
    return (
      <BarChart width={600} height={300} data={this.props.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="发帖量" fill="#8884d8" />
        <Bar dataKey="回复数" fill="#82ca9d" />
      </BarChart>
    );
  }
});

export default BarChartComponent;
