import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ cartItems, handleRemoveFromCart, handleClearCart, handleUpdateQuantity }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const navigate = useNavigate();

  // Handle placing the order
  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      alert('Order Placed!');
      handleClearCart(); // Clear the cart after placing the order
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white shadow-md p-4 mb-4 rounded-lg">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1} // Disable if quantity is 1
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <p className="text-lg">Total Items: {totalItems}</p>
            <p className="text-lg mb-4">Total Price: ${totalPrice.toFixed(2)}</p>

            {/* Place Order Button */}
            <button
              className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

            {/* Clear Cart Button */}
            <button
              className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>

          {/* Buy More Items Button */}
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate('/')}
          >
            Buy More Items
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
