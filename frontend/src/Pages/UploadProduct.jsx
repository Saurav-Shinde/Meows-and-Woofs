import React, { useState } from 'react';
import axios from 'axios';

const UploadProduct = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('category', form.category);
    formData.append('price', form.price);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5050/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product uploaded successfully!');
      // Reset form
      setForm({ name: '', category: '', price: '' });
      setImage(null);
      e.target.reset();
    } catch (err) {
      console.error('Error uploading product:', err);
      alert('Error uploading product. See console for details.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload New Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full h-10 border-2 border-[#676f58] bg-transparent rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full h-10 border-2 border-[#676f58] bg-transparent rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full h-10 border-2 border-[#676f58] bg-transparent rounded-lg p-2 mt-1"
            required
          />
        </div>
        
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500 mt-1
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-[#FFCDD2] file:text-[#D32F2F]
                       hover:file:bg-[#EF9A9A]"
            required
          />
        </div>

        <button type="submit" className="w-full h-12 bg-[#676f58] text-[#d4c7aa] font-bold rounded-lg hover:bg-[#4d5a38] transition-colors">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct; 