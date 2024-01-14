// src/components/ProductForm.js
import '../../../styles/admin/productForm.css';
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ProductForm = ({ selectedProduct, onAddProduct, onCloseForm }) => {
    const [product, setProduct] = useState({
      id: 0,
      name: '',
      price: 0,
      images: [],
      category: ''
    });
  
    useEffect(() => {
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        setProduct({
          id: 0,
          name: '',
          price: 0,
          images: [],
          category: ''
        });
      }
    }, [selectedProduct]);
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleDrop = (acceptedFiles) => {
      setProduct({
        ...product,
        images: [...product.images, ...acceptedFiles.map(file => URL.createObjectURL(file))]
      });
    };
  
    const handleRemoveImage = (index) => {
      const updatedImages = [...product.images];
      updatedImages.splice(index, 1);
      setProduct({ ...product, images: updatedImages });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddProduct(product);
      setProduct({
        id: 0,
        name: '',
        price: 0,
        images: [],
        category: ''
      });
      onCloseForm();
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: handleDrop
    });
  

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-8 border rounded-lg shadow-md bg-white">
      <label className="block mb-4">
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          className="form-input mt-1 block w-full"
        />
      </label>

      <label className="block mb-4">
        Images (drag and drop or click to select):
        <div {...getRootProps()} className="dropzone mt-2 p-4 border-dashed border-gray-300">
          <input {...getInputProps()} />
          <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
        </div>
        {product.images.length > 0 && (
          <div className="image-preview mt-4 flex flex-wrap">
            {product.images.map((image, index) => (
              <div key={index} className="image-container relative mb-4 mr-4">
                <img src={image} alt={`Image ${index}`} className="preview-image rounded-lg" />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="remove-image-button absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {selectedProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;