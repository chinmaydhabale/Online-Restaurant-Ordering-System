import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import CategorySlider from './Component/CategorySlider';
import FoodList from './Component/FoodList';
import ShoppingCart from './Component/ShoppingCart';
import product from './Food-Data/foodproduct';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const categories = ['All', ...new Set(product.map(item => item.category))];

  const filteredProducts = selectedCategory === 'All'
    ? product
    : product.filter(item => item.category === selectedCategory);

  // Handle adding item to cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle clearing all items in the cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // add or remove quantity of an item in the cart
  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0
    );
  };
  

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar cartItemsCount={cartItems.length} />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Category Slider and Food List */}
                <CategorySlider categories={categories} setSelectedCategory={setSelectedCategory} />
                <FoodList products={filteredProducts} handleAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
                handleClearCart={handleClearCart}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
