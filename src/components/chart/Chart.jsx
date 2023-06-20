import React from "react";
import { LineChart, XAxis, ResponsiveContainer, Line, Tooltip } from "recharts";

import "./chart.css";

function Chart() {
  const data = [
    {
      name: "Jan",
      "Active User": 1000,
    },
    {
      name: "Feb",
      "Active User": 2000,
    },
    {
      name: "March",
      "Active User": 4000,
    },
    {
      name: "April",
      "Active User": 3000,
    },
    {
      name: "May",
      "Active User": 2000,
    },
    {
      name: "June",
      "Active User": 2500,
    },
    {
      name: "July",
      "Active User": 7000,
    },
    {
      name: "Avg",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 2500,
    },
    {
      name: "Nov",
      "Active User": 5000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
