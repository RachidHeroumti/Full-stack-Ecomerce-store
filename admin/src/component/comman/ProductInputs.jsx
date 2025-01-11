import React, { useState } from 'react';
import { EcoState } from '../../Context/EcoProvider';
import axios from 'axios';
import Cookies from 'js-cookie'
import { CreateProductRoute } from '../../RoutersApi/ApiRoutes';

function ProductInputs({ setToaddNewProduct }) {
  const{collections}=EcoState()
  const {userToken}=EcoState()
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [collection, setCollection] = useState('');
  const [tags, setTags] = useState([]);
  const [brand, setBrand] = useState([]);
  const [description, setDescription] = useState('');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setTags((prevTags) => [...prevTags, e.target.value.trim()]);
      e.target.value = '';
      e.preventDefault();
    }
  };

  const handleAddBrand = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setBrand((prevBrands) => [...prevBrands, e.target.value.trim()]);
      e.target.value = '';
      e.preventDefault();
    }
  };

  const CreateProduct=async()=>{
    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      }
      console.log("🚀 ~ CreateProduct ~ config:", config)
      const res = await axios.post(CreateProductRoute,{
        title :productName ,
        price:price,
        category :collection,
        brands :brand,
        description :description,
        seller :'6538fc5861628093506f4142',
        image :"https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
        images :[
           "https://images.pexels.com/photos/13257111/pexels-photo-13257111.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
           "https://images.pexels.com/photos/277429/pexels-photo-277429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
           "https://images.pexels.com/photos/3829442/pexels-photo-3829442.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
           "https://images.pexels.com/photos/9204686/pexels-photo-9204686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
           "https://images.pexels.com/photos/13257109/pexels-photo-13257109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]
      
      },config)
      console.log("🚀 ~ CreateProduct ~ res:", res)

    } catch (error) {
      console.log("🚀 ~ CreateProduct ~ error:", error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 flex">
        <div className="w-1/2 pr-6 border-r border-gray-200">
          <div className="flex flex-col items-center relative">
            <div className="w-full h-[250px] bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
              <img
                src="https://via.placeholder.com/128"
                alt="Product Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="w-full h-full top-0 left-0 absolute flex justify-center items-center">
              <span>Upload Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden w-full h-full"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      // Handle image preview URL
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">JPEG, PNG, or GIF (max 5MB)</p>
          </div>
        </div>

        <div className="w-1/2 pl-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
            <button
              onClick={() => setToaddNewProduct(false)}
              className="text-gray-500 hover:text-gray-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Collection</label>
              <select
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Collection</option>
                {
                collections.map((collection) => (
                  <option key={collection._id} value={collection._id}>
                    {collection.name}
                  </option>
                ))
              
                }
                
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <input
                type="text"
                placeholder="Add a tag and press Enter"
                onKeyDown={handleAddTag}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <input
                type="text"
                placeholder="Add a brand and press Enter"
                onKeyDown={handleAddBrand}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {brand.map((b, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-500 px-2 py-1 rounded-md text-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Enter product description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button
              onClick={() => { CreateProduct() }}
              
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInputs;
