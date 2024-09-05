import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddIncomeModal = ({ isOpen, onClose, onSave }) => {
  const [incomeAmount, setIncomeAmount] = useState('');

  const handleSave = () => {
    const income = parseFloat(incomeAmount); // Parse the amount to a float
    if (!isNaN(income) && income > 0) {
      onSave(income);
      setIncomeAmount(''); // Clear input
      onClose();
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Add Income">
      <h2>Add Balance</h2>
      <input
        type="number"
        placeholder="Income Amount"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <div className="modal-actions">
        <button onClick={handleSave}>Add Balance</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default AddIncomeModal;