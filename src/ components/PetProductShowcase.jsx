import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productData from '../data/petProducts.json';

const PetProductShowcase = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get category from query param (default "All")
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);

  const categories = [
    'All',
    'Dog/Cat Food',
    'Toys',
    'Grooming Essentials',
    'Bedding and Apparel',
    'Health Supplements',
  ];

  // Update filter when query param changes
  useEffect(() => {
    const urlCategory = queryParams.get('category') || 'All';
    setCategoryFilter(urlCategory);
  }, [location.search]);

  // Change filter + update URL
  const handleCategoryChange = (cat) => {
    setCategoryFilter(cat);
    navigate(`/products?category=${encodeURIComponent(cat)}`);
  };

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 product-showcase-title">
        Pet Product Showcase
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 product-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1 rounded border ${
              categoryFilter === cat ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded product-search"
      />

      {/* Products */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded p-4 border product-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{product.category}</p>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-green-700">{product.price}</p>
            <button className="mt-3 px-4 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-8">No products found.</p>
      )}
    </div>
  );
};

export default PetProductShowcase;
