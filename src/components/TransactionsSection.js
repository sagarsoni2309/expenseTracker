import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TransactionsSection = ({ transactions, onEdit }) => {
  return (
    <div className="transactions-section">
      <h3>Recent Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className="transaction-details">
              <span>{transaction.title}</span>
              <span>₹{transaction.amount}</span>
              <span>{transaction.category}</span>
              <span>{transaction.date}</span>
            </div>
            <button onClick={() => onEdit(transaction)}>
              <FaEdit /> Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsSection;