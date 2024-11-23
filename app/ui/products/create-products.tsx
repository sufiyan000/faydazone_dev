"use client"
import React, { useState } from 'react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    sku: '',
    tags: '',
    price: '',
    discountedPrice: '',
    costPrice: '',
    stockQuantity: '',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    variants: [{ color: '', size: '' }],
    warranty: '',
    returnPolicy: '',
    metaTitle: '',
    metaDescription: '',
    urlSlug: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDimensionChange = (e:any) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      dimensions: {
        ...prevData.dimensions,
        [name]: value
      }
    }));
  };

  const handleVariantChange = (index:any, e:any) => {
    const { name, value } = e.target;
    const updatedVariants = [...productData.variants];
    updatedVariants[index] = {
      ...updatedVariants[index],
      [name]: value
    };
    setProductData((prevData) => ({
      ...prevData,
      variants: updatedVariants
    }));
  };

 
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Product Data:', productData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h2>

      {/* Product Details */}
      <label className="block text-gray-700">Product Name:</label>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Description:</label>
      <textarea
        name="description"
        value={productData.description}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Category:</label>
       <select id="category" className="w-full mt-1 p-2 border border-gray-300 rounded-md" value={productData.category}>
        <option value="">Select category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="beauty">Beauty</option>
        </select>

        <label className="block text-gray-700">Sub-Category:</label>
       <select id="category" className="w-full mt-1 p-2 border border-gray-300 rounded-md" value={productData.category}>
        <option value="">sub-category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="beauty">Beauty</option>
        </select>

        <label className="block text-gray-700">Sub-levels</label>
       <select id="category" className="w-full mt-1 p-2 border border-gray-300 rounded-md" value={productData.category}>
        <option value="">Sub-levels</option>
        <option value="electronics">1</option>
        <option value="fashion">2</option>
        <option value="beauty">3</option>
        </select>

     <label className="block text-gray-700">Suppliers:</label>
     <select id="suppliers" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
        <option value="">Select suppliers</option>
        <option value="electronics">supplier1</option>
        <option value="fashion">supplier2</option>
        <option value="beauty">supplier3</option>
        </select>

      <label className="block text-gray-700">Brand:</label>
      <input
        type="text"
        name="brand"
        value={productData.brand}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Warranty:</label>
      <input
        type="warranty"
        name="warranty"
        value={productData.warranty}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">SKU:</label>
      <input
        type="text"
        name="sku"
        value={productData.sku}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      {/* Pricing Information */}
      <label className="block text-gray-700">Sale Price:</label>
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Purchase Price:</label>
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Price:</label>
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Discounted Price:</label>
      <input
        type="number"
        name="discountedPrice"
        value={productData.discountedPrice}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      {/* Inventory Details */}
      <label className="block text-gray-700">Stock Quantity:</label>
      <input
        type="number"
        name="stockQuantity"
        value={productData.stockQuantity}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      {/* Shipping Information */}
      <label className="block text-gray-700">Weight (kg):</label>
      <input
        type="number"
        name="weight"
        value={productData.weight}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />

      <label className="block text-gray-700">Dimensions (L x W x H):</label>
      <div className="flex space-x-2">
        <input
          type="number"
          name="length"
          value={productData.dimensions.length}
          onChange={handleDimensionChange}
          placeholder="Length"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <input
          type="number"
          name="width"
          value={productData.dimensions.width}
          onChange={handleDimensionChange}
          placeholder="Width"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <input
          type="number"
          name="height"
          value={productData.dimensions.height}
          onChange={handleDimensionChange}
          placeholder="Height"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Variants */}
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Product Variants</h3>
      {productData.variants.map((variant, index) => (
        <div key={index} className="mb-4 border p-4 rounded-lg">
          <label className="block text-gray-700">Color:</label>
          <input
            type="text"
            name="color"
            value={variant.color}
            onChange={(e) => handleVariantChange(index, e)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />

          <label className="block text-gray-700">Size:</label>
          <input
            type="text"
            name="size"
            value={variant.size}
            onChange={(e) => handleVariantChange(index, e)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />

           <label className="block text-gray-700">Additional Info:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />

          

          
        </div>
      ))}
      

      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProductForm;
