import React, { useEffect, useState } from 'react'

function Products() {
    const [showproducts, setShowProducts] = useState(true);
    const [toAddNewProduct, setToaddNewProduct] = useState(false);
    useEffect(()=>{

    },[])

  return (
    <div>
        <div className="w-full  p-6 bg-gray-100 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Products</h1>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => setToaddNewProduct(true)}
            >
              Add New Product
            </button>
          </div>

          {/* Product List Section */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
              <div>Image</div>
              <div>Product Name</div>
              <div>Price</div>
              <div>Created At</div>
              <div>Actions</div>
            </div>

            {/* Product Item */}
            <div className="grid grid-cols-5 gap-4 p-2 items-center border-b hover:bg-gray-50 transition duration-200">
              {/* Image */}
              <div>
                <img
                  src="https://images.pexels.com/photos/29732529/pexels-photo-29732529/free-photo-of-child-in-raincoat-enjoys-warm-drink-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
              </div>

              {/* Product Name */}
              <div className="text-gray-800 font-medium">Product Name</div>

              {/* Price */}
              <div className="text-gray-700">$00.00</div>

              {/* Created At */}
              <div className="text-gray-500">2024-10-30 14:15</div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:text-blue-700">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </div>
            </div>

            {/* Add more product items here */}
          </div>

          {toAddNewProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 flex">
                {/* Left Section: Image Upload */}
                <div className="w-1/2 pr-6 border-r border-gray-200 ">
                  <div className="flex flex-col items-center relative ">
                    {/* Image Preview */}
                    <div className="w-full h-[250px] bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src="https://via.placeholder.com/128" // Replace with uploaded image
                        alt="Product Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Upload Button */}
                    <label className="w-full h-full  top-0 left-0 absolute  flex justify-center items-center">
                      <span>Upload Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden w-full h-full"
                        onChange={(e) => {
                          // Handle image upload logic here
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              // Set the image preview URL
                              // Example: setImagePreview(event.target.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>

                    <p className="text-sm text-gray-500 mt-2">
                      JPEG, PNG, or GIF (max 5MB)
                    </p>
                  </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="w-1/2 pl-6">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      Add New Product
                    </h2>
                    <button
                      onClick={() => setToaddNewProduct(false)} // Close the modal
                      className="text-gray-500 hover:text-gray-700 transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <form>
                    {/* Product Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Product Price */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price
                      </label>
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Collection */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Collection
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Collection</option>
                        <option value="collection1">Collection 1</option>
                        <option value="collection2">Collection 2</option>
                        <option value="collection3">Collection 3</option>
                      </select>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="tag1">Tag 1</option>
                        <option value="tag2">Tag 2</option>
                        <option value="tag3">Tag 3</option>
                        <option value="tag4">Tag 4</option>
                      </select>
                    </div>

                    {/* Brand */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Brand
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Brand</option>
                        <option value="brand1">Brand 1</option>
                        <option value="brand2">Brand 2</option>
                        <option value="brand3">Brand 3</option>
                      </select>
                    </div>

                    {/* Product Description */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        placeholder="Enter product description"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                      >
                        Done
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div> 
    </div>
  )
}

export default Products
