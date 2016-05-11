import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {name: '8:00', 发帖量: 40, 回复数: 240, amt: 240},
  {name: '9:00', 发帖量: 30, 回复数: 139, amt: 210},
  {name: '10:00', 发帖量: 20, 回复数: 600, amt: 229},
  {name: '11:00', 发帖量: 27, 回复数: 408, amt: 200},
  {name: '12:00', 发帖量: 18, 回复数: 700, amt: 218},
  {name: '13:00', 发帖量: 23, 回复数: 303, amt: 250},
  {name: '14:00', 发帖量: 34, 回复数: 431, amt: 210}
];

const BarChartComponent = React.createClass({
  render () {
    return (
      <BarChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="发帖量" fill="#8884d8" />
        <Bar dataKey="回复数" fill="#82ca9d" />
      </BarChart>
    );
  }
});

export default BarChartComponent;
