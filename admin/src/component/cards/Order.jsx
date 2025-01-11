import React from 'react'

function Order() {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-5 gap-4 p-4 items-center border-b hover:bg-gray-50 '>
            <div>Ahmed jamal </div>
            <div>12/01/2024</div>
            <div>Pending</div>
            <div>124.45 $$</div>
            <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700">
                        Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </div>
        </div>
      
    </div>
  )
}

export default Order
