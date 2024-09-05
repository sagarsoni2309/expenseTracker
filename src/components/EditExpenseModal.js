import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditExpenseModal = ({ isOpen, onClose, onSave, currentTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (currentTransaction) {
      setTitle(currentTransaction.title);
      setAmount(currentTransaction.amount);
      setCategory(currentTransaction.category);
      setDate(currentTransaction.date);
    }
  }, [currentTransaction]);

  const handleSave = () => {
    const updatedTransaction = {
      ...currentTransaction,
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    onSave(updatedTransaction);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit Expense">
      <h2>Edit Expense</h2>
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
        <button onClick={handleSave}>Save Changes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default EditExpenseModal;