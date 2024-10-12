import React from 'react';

const FoodList = ({ products, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
          <p className="mt-1 text-gray-500">${product.price.toFixed(2)}</p>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
