// src/components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, onDeleteCategory }) => {
  return (
    <ul className="mt-4">
      {categories.map((category) => (
        <li key={category.id} className="bg-white p-4 mb-2 shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">{category.name}</span>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onDeleteCategory(category.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
