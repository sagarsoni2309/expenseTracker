import React from 'react';

const WalletBalance = ({ balance, onAddIncome }) => {
  return (
    <div className="summary-card">
      <h3>Wallet Balance</h3>
      <p>₹{balance.toFixed(2)}</p> {/* Ensure balance is a number and display 2 decimal places */}
      <button onClick={onAddIncome}>+ Add Income</button>
    </div>
  );
};

export default WalletBalance;