import React from 'react';
import addProductIcon from '../assets/icon_add.avif'

const AddProductButton = () => {
  return (
    <button className="flex items-center bg-transparent py-2 px-4 rounded">
      <img src={addProductIcon} alt="Add Product" className="mr-2 w-5 h-5" />
    </button>
  );
};

export default AddProductButton;
