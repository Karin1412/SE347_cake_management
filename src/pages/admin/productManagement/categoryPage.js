// src/components/CategoryManagementPage.js
import React, { useState } from 'react';
import CategoryInputForm from './categoryInputForm';
import CategoryList from './categoryList';
import Navbar from '../../../components/admin/navbar';
import ProNav from './proNav'
const CategoryManagementPage = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, id: Date.now() }]);
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories(categories.filter((category) => category.id !== categoryId));
  };

  return (
    <div>
        <Navbar/>
        <ProNav/>
        <div className="container mx-auto p-4">
      
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>

      <CategoryInputForm onAddCategory={handleAddCategory} />

      <CategoryList categories={categories} onDeleteCategory={handleDeleteCategory} />
    </div>
    </div>
    
  );
};

export default CategoryManagementPage;
