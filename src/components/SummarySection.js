import React from 'react';

const SummarySection = ({ walletBalance, expenses, onAddIncome, onAddExpense }) => {
  return (
    <section className="summary-section">
      <div className="summary-card">
        <h3>Wallet Balance</h3>
        <p>₹{walletBalance}</p>
        <button onClick={onAddIncome}>+ Add Income</button>
      </div>
      <div className="summary-card">
        <h3>Expenses</h3>
        <p>₹{expenses}</p>
        <button onClick={onAddExpense}>+ Add Expense</button>
      </div>
    </section>
  );
};

export default SummarySection;