import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ExpenseChartsSection = ({ transactions }) => {
  const categories = ['Food', 'Entertainment', 'Travel'];
  
  const data = categories.map((category) => {
    const total = transactions
      .filter((tx) => tx.category === category)
      .reduce((sum, tx) => sum + tx.amount, 0);
    return { name: category, value: total };
  });

  return (
    <div className="charts-section">
      <h3>Expense Distribution</h3>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseChartsSection;