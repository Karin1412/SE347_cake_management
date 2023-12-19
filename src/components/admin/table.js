import React from 'react';

const ProductTable = () => {
  const products = [
    { id: 1, name: 'Product A', price: 20.99 , img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg' },
    { id: 2, name: 'Product B', price: 15.49 , img: 'https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktopimages/rainbow-cake600x600_2.jpg?ext=.jpg'},
    { id: 3, name: 'Product C', price: 25.99 , img: 'https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-threeByTwoMediumAt2X.jpg'},
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <img src={product.imageUrl} alt={`Product ${product.id}`} className="h-10 w-10 object-cover rounded" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <button className="bg-[#69432B] text-white py-1 px-2 rounded">Edit</button>
            <button className="bg-red-600 text-white py-1 px-2 rounded ml-1">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;