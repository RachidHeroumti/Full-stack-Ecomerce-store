import { useEffect, useState } from "react";
import SidBar from "./comman/SideBar";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import { EcoState } from "../Context/EcoProvider";

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const{userToken}=EcoState() 
  
  useEffect(() => {
    const token = Cookies.get('token')
    if (!userToken && !token) {
      navigate("/login");
    }
  }, [])

  return (
    <div className="flex min-h-screen font-sans bg-gray-100 w-full">

      <main className="flex-1 p-8">
          <header className="mb-8">
            <h2 className="text-3xl font-semibold">Welcome, Admin</h2>
            <p className="text-gray-600">
              Here s a quick overview of your dashboard.
            </p>
          </header>
        

          <div>
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
                <p className="text-gray-600">
                  Manage recent customer orders here.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Inventory</h4>
                <p className="text-gray-600">
                  Keep track of your stock and inventory levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Support Tickets</h4>
                <p className="text-gray-600">
                  Respond to customer inquiries quickly.
                </p>
              </div>
            </section>
          </div>
        
     

      </main>
    </div>
  );
}
