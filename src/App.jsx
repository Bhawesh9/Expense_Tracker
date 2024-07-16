import React, { useState } from 'react';
import Expense from './Components/Expense';
import Transactions from './Components/Transactions';

const App = () => {
  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <div className='bg-zinc-100 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden'>
        <header className='bg-blue-600 text-white p-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-center'>Expense Tracker</h1>
        </header>
        <main className='p-4 md:p-6'>
          <Expense income={income} setIncome={setIncome} totalExpenses={totalExpenses} />
          <Transactions 
            transactions={transactions} 
            setTransactions={setTransactions} 
            setTotalExpenses={setTotalExpenses}
          />
        </main>
      </div>
    </div>
  );
};

export default App;