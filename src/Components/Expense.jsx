import React, { useState } from 'react';

const Expense = ({ income, setIncome, totalExpenses }) => {
  const [incomeInput, setIncomeInput] = useState('');

  const handleIncomeChange = () => {
    const value = parseFloat(incomeInput);
    if (!isNaN(value) && value >= 0) {
      setIncome(value);
    } else {
      alert("Please enter a valid income amount.");
    }
    setIncomeInput('');
  };

  // Calculate remaining income after expenses
  const currentIncome = income - totalExpenses;

  return (
    <div className='flex flex-col sm:flex-row justify-between mx-4 mb-8 sm:mb-16 space-y-4 sm:space-y-0 sm:space-x-4'>
      <div className='w-full sm:w-1/2 p-4 border border-zinc-300 rounded-lg shadow-sm'>
        <h5 className='text-lg font-semibold mb-2'>Expense</h5>
        <p className='text-red-600 font-extrabold text-2xl'>Rs {totalExpenses}</p>
      </div>
      <div className='w-full sm:w-1/2 p-4 border border-zinc-300 rounded-lg shadow-sm'>
        <h2 className='text-lg font-semibold mb-2'>Income</h2>
        <div className='flex flex-col space-y-2'>
          <input
            type='number'
            placeholder='Set Income'
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
            className='px-3 py-2 border rounded-md w-full'
          />
          <button 
            onClick={handleIncomeChange} 
            className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors'
          >
            Set Income
          </button>
        </div>
        <div className='mt-4'>
          <h6 className='font-semibold'>Remaining Balance:</h6>
          <p className='text-green-600 font-extrabold text-xl'>
            Rs {currentIncome >= 0 ? currentIncome : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expense;