import React, { useState } from 'react';

function Shop() {
  // State for filters
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Example data
  const collections = ["Men's Clothing", "Women's Clothing", "Accessories", "Footwear"];
  const colors = ["red", "blue", "green", "yellow", "black", "white"];
  const products = [
    { id: 1, name: "Eco T-Shirt", collection: "Men's Clothing", color: "blue", price: 25 },
    { id: 2, name: "Eco Dress", collection: "Women's Clothing", color: "red", price: 50 },
    { id: 3, name: "Eco Bag", collection: "Accessories", color: "green", price: 30 },
    { id: 4, name: "Eco Sneakers", collection: "Footwear", color: "black", price: 80 },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(product.collection);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesCollection && matchesColor && matchesPrice;
  });

  // Handle collection filter change
  const handleCollectionChange = (collection) => {
    setSelectedCollections((prev) =>
      prev.includes(collection)
        ? prev.filter((item) => item !== collection)
        : [...prev, collection]
    );
  };

  // Handle color filter change
  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((item) => item !== color)
        : [...prev, color]
    );
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="container mx-auto p-6 flex">
      {/* Filters Section */}
      <div className="w-1/4 pr-6 space-y-6">
        {/* Search Bar */}
        <div className="border rounded-lg p-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none"
          />
        </div>

        {/* Collections Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Collections</h2>
          {collections.map((collection) => (
            <label key={collection} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={selectedCollections.includes(collection)}
                onChange={() => handleCollectionChange(collection)}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span>{collection}</span>
            </label>
          ))}
        </div>

        {/* Colors Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Colors</h2>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={`h-8 w-8 rounded-full border-2 ${
                  selectedColors.includes(color) ? "border-indigo-600" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Price Range</h2>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="w-1/2 p-2 border rounded-lg"
                placeholder="Min"
              />
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                className="w-1/2 p-2 border rounded-lg"
                placeholder="Max"
              />
            </div>
            <div className="text-sm text-gray-600">
              Range: ${priceRange.min} - ${priceRange.max}
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg"></div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.collection}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;