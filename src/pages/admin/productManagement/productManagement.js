// src/components/ProductManagement.js
import React, {useState, useEffect }from 'react';
import Navbar from '../../../components/admin/navbar';
import ProductForm from './productForm'
import ProNav from './proNav.js'

const ProductManagement = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          name: 'Product 1',
          price: 10.99,
          images: ['https://example.com/image1a.jpg', 'https://example.com/image1b.jpg'],
          category: 'Category 1'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
          images: ['https://example.com/image2a.jpg', 'https://example.com/image2b.jpg'],
          category: 'Category 2'
        },
        // Thêm các sản phẩm khác vào đây
      ]);
    
      const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormVisible(true);
  };

  const handleAddProduct = (newProduct) => {
    if (selectedProduct) {
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id ? newProduct : product
        )
      );
      setSelectedProduct(null);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setFormVisible(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
    
      const handleDelete = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
      };
    
      
    
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div>
        <Navbar/>
        <ProNav/>
        <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setSelectedProduct(null);
          setFormVisible(true);
        }}
      >
        Add New Product
      </button>

      {isFormVisible && (
        <ProductForm
          selectedProduct={selectedProduct}
          onAddProduct={handleAddProduct}
          onCloseForm={() => setFormVisible(false)}
        />
      )}

      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <ul className="mt-4">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 mb-2 shadow-md rounded-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${product.id} - Image ${index}`}
                    className="h-12 w-12 object-cover rounded-full"
                  />
                ))}
                <div>
                  <span className="text-lg">{product.name} - ${product.price}</span>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ProductManagement;
