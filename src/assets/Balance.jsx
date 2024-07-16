import React from 'react'

const Balance = () => {
  return (
    <div className='flex justify-between  p-4'>
     <div> 
     <h3 className='font-semibold text-xl'>Balance: Rs 5000</h3></div> 
     <div>
        <button className='px-4 rounded-md bg-black text-white'>Add</button>
     </div>
    </div>
  )
}

export default Balance
