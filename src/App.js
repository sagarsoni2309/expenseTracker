import React, { useState } from 'react';
import WalletBalance from './components/WalletBalance';
import Header from './components/Header';
import SummarySection from './components/SummarySection';
import TransactionsSection from './components/TransactionsSection';
import ExpenseChartsSection from './components/ExpenseChartsSection';
import AddExpenseModal from './components/AddExpenseModal';
import AddIncomeModal from './components/AddIncomeModal';
import EditExpenseModal from './components/EditExpenseModal';
import './styles.css';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(4500);
  const [expenses, setExpenses] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  // Add Income handler
  const handleAddIncome = (incomeAmount) => {
    setWalletBalance(walletBalance + incomeAmount);
  };

  // Add Expense handler
  const handleAddExpense = (expense) => {
    if (expense.amount > walletBalance) {
      alert('You cannot spend more than your wallet balance.');
      return;
    }
    setTransactions([...transactions, expense]);
    setExpenses(expenses + expense.amount);
    setWalletBalance(walletBalance - expense.amount);
  };

  // Edit Expense handler
  const handleEditExpense = (updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
  };

  const handleOpenEditModal = (transaction) => {
    setCurrentTransaction(transaction);
    setEditModalOpen(true);
  };

  return (
    <div className="expense-tracker">
      <Header />
      <SummarySection
        walletBalance={walletBalance}
        expenses={expenses}
        onAddIncome={() => setIncomeModalOpen(true)}
        onAddExpense={() => setExpenseModalOpen(true)}
      />
      <TransactionsSection transactions={transactions} onEdit={handleOpenEditModal} />
      <ExpenseChartsSection transactions={transactions} />

      {/* Modals */}
      <AddExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setExpenseModalOpen(false)}
        onSave={handleAddExpense}
      />
      <AddIncomeModal
        isOpen={isIncomeModalOpen}
        onClose={() => setIncomeModalOpen(false)}
        onSave={handleAddIncome}
      />
      <EditExpenseModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleEditExpense}
        currentTransaction={currentTransaction}
      />
    </div>
  );
};

export default App;