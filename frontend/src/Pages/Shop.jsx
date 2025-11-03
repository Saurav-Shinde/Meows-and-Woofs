import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';
  
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "Dog Food", "Cat Food", "Dog Leash", "Cat Leash"]; // Define categories

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }
 
  useEffect(() => {
    axios.get('http://localhost:5050/api/products')
         .then(res => setProducts(res.data))
         .catch(err => console.error(err));
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 ">
        {/* Filter Dropdown */}
        <div className="w-full max-w-md mb-8 ">
          <select
            className="w-full h-10 border-[2px] border-solid border-[#676f58] bg-transparent rounded-lg p-2"
            onChange={handleCategoryChange}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Shop Logo */}
        <div className="w-[75%]  mb-8">
          <img
            src="./images/shoplogo.jpeg"
            alt="Shop Logo"
            className="w-full h-52 object-cover object-center rounded-xl"
          />
        </div>

        {/* Product Cards */}
        <ProductCard products={filteredProducts} />
      </div>
          
    </>
  );
};

export default Shop;
