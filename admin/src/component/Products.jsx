import React, { useEffect, useState } from "react";
import { EcoState } from "../Context/EcoProvider";
import ProductInputs from "./comman/ProductInputs";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [toAddNewProduct, setToaddNewProduct] = useState(false);
  const {  allProducts } = EcoState();
const{userToken}=EcoState() 

  useEffect(() => {
    const token = Cookies.get('token')
    console.log("🚀 ~ useEffect ~ token:", token)
    if (!userToken && !token) {
      navigate("/login");
    }
  }, [])

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

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b font-semibold text-gray-700">
            <div>Image</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Created At</div>
            <div>Actions</div>
          </div>

          <div className=" overflow-y-auto" style={{ height: "500px" }}>
            {allProducts &&
              allProducts.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="grid grid-cols-5 gap-4 p-2 items-center border-b hover:bg-gray-50 transition duration-200"
                  >
                    {/* Image */}
                    <div>
                      <img
                        src={product.image}
                        alt="Product"
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>

                    {/* Product Name */}
                    <div className="text-gray-800 font-medium">
                      {product.title}
                    </div>

                    {/* Price */}
                    <div className="text-gray-700">{product.price}$$</div>

                    {/* Created At */}
                    <div className="text-gray-500">{product.createdAt}</div>

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
                );
              })}
          </div>
        </div>

        {toAddNewProduct && (
        <ProductInputs setToaddNewProduct={setToaddNewProduct}/>
        )}
      </div>
    </div>
  );
}

export default Products;
