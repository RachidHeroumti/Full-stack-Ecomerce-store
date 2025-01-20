import React from 'react'

function SidBar() {
  return (
    <div className='h-screen  bg-gray-800'>
        <aside className="w-64  text-white p-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <a href="/" className="hover:bg-gray-700 p-3 rounded">Overview</a>
          <a href="/products" className="hover:bg-gray-700 p-3 rounded">Products</a>
          <a href="/orders" className="hover:bg-gray-700 p-3 rounded">Orders</a>
          <a href="/users" className="hover:bg-gray-700 p-3 rounded">Users</a>
          <a href="/settings" className="hover:bg-gray-700 p-3 rounded">Settings</a>
          <a href="/media" className="hover:bg-gray-700 p-3 rounded">Media</a>
        </nav>
      </aside>
    </div>
  )
}

export default SidBar
