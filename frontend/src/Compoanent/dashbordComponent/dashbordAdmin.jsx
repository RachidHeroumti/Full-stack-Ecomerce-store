import React from 'react';

export default function DashboardAdmin() {

  return (
    <div className="flex min-h-screen font-sans bg-gray-100 pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <a href="#" className="hover:bg-gray-700 p-3 rounded">Overview</a>
          <a href="#" className="hover:bg-gray-700 p-3 rounded">Products</a>
          <a href="#" className="hover:bg-gray-700 p-3 rounded">Orders</a>
          <a href="#" className="hover:bg-gray-700 p-3 rounded">Users</a>
          <a href="#" className="hover:bg-gray-700 p-3 rounded">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">Welcome, Admin</h2>
          <p className="text-gray-600">Here's a quick overview of your dashboard.</p>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Sales</h3>
            <p className="text-3xl font-bold text-blue-500">$12,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">New Orders</h3>
            <p className="text-3xl font-bold text-green-500">123</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-3xl font-bold text-purple-500">456</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Products</h3>
            <p className="text-3xl font-bold text-orange-500">78</p>
          </div>
        </section>

        {/* Content Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Recent Orders</h4>
            <p className="text-gray-600">Manage recent customer orders here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Inventory</h4>
            <p className="text-gray-600">Keep track of your stock and inventory levels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">Support Tickets</h4>
            <p className="text-gray-600">Respond to customer inquiries quickly.</p>
          </div>
        </section>
      </main>
      
    </div>
  );
}

