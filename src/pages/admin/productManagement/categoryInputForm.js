// src/components/CategoryInputForm.js
import React, { useState } from 'react';

const CategoryInputForm = ({ onAddCategory }) => {
  const [category, setCategory] = useState({
    id: 0,
    name: '',
  });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(category);
    setCategory({
      id: 0,
      name: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 border rounded-lg shadow-md bg-white">
      <label className="block mb-4">
        Category Name:
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryInputForm;
