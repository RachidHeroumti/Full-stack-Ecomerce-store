import React from 'react'
import Order from '../component/cards/Order'

function Orders() {
  return (
    <div>
        <div className="w-full  p-6 bg-gray-100 rounded-lg shadow-md  overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => setToaddNewProduct(true)}
          >
            Add New Product
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden ">
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
            <div>Client </div>
            <div>Date</div>
            <div>Status</div> 
            <div>Totla</div>
            <div>Actions</div>
          </div>
          <Order/>

          </div>
        </div>
    </div>
  )
}

export default Orders
