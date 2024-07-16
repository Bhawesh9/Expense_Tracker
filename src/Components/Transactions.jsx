import React, { useState } from 'react';

const Transactions = ({ transactions, setTransactions, setIncome, setTotalExpenses }) => {
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const amount = parseFloat(newTransaction.amount);
    if (!newTransaction.description || isNaN(amount)) {
      alert("Please enter a valid description and amount for expenses.");
      return;
    }
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now(), description: newTransaction.description, amount }
    ]);
    setTotalExpenses((prevTotal) => prevTotal + Math.abs(amount));
    setIncome((prevIncome) => prevIncome - Math.abs(amount));
    setNewTransaction({ description: '', amount: '' });
  };

  const handleClearTransactions = () => {
    setTransactions([]);
    setTotalExpenses(0);
    setIncome(0);
  };

  return (
    <div className='px-3 mt-6 max-w-4xl mx-auto'>
      <h2 className='text-xl md:text-2xl font-bold mb-4'>Transactions</h2>
      <form onSubmit={handleFormSubmit} className='space-y-4'>
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={newTransaction.description}
          onChange={handleInputChange}
          className='px-4 py-2 border rounded-md w-full'
        />
        <input
          type='number'
          name='amount'
          placeholder='Amount (negative for expenses)'
          value={newTransaction.amount}
          onChange={handleInputChange}
          className='px-4 py-2 border rounded-md w-full'
        />
        <div className='flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2'>
          <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md w-full sm:w-auto'>Add Transaction</button>
          <button type='button' onClick={handleClearTransactions} className='px-4 py-2 bg-red-500 text-white rounded-md w-full sm:w-auto'>Clear All</button>
        </div>
      </form>
      <div className='mt-6 space-y-2'>
        {transactions.map(transaction => (
          <div key={transaction.id} className='flex justify-between p-2 border-b border-gray-300'>
            <span className='truncate mr-2'>{transaction.description}</span>
            <span className='text-red-600 whitespace-nowrap'>Rs {transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;