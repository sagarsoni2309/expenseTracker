import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddExpenseModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    const expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    onSave(expense);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Expense">
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>Select Category</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Travel">Travel</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="modal-actions">
        <button onClick={handleSave}>Add Expense</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default AddExpenseModal;