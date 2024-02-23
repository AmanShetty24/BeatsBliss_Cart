// ProductList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';
import './Style.css';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleAddToCart = (productId, quantity) => {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const productToAdd = products.find((product) => product.id === productId);
      setCart((prevCart) => [...prevCart, { ...productToAdd, quantity }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const formattedCategoryFilter = categoryFilter.trim().toLowerCase();
  const filteredProducts =
    formattedCategoryFilter === 'all'
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === formattedCategoryFilter
        );

  return (
    <div>
      <div className="filter-container">
        <button
          className={
            formattedCategoryFilter === 'all'
              ? 'active-filter'
              : 'filter-buttons'
          }
          onClick={() => setCategoryFilter('All')}
        >
          All
        </button>
        <button
          className={
            formattedCategoryFilter === 'headphones'
              ? 'active-filter'
              : 'filter-buttons'
          }
          onClick={() => setCategoryFilter('Headphones')}
        >
          Headphones
        </button>
        <button
          className={
            formattedCategoryFilter === 'earbuds'
              ? 'active-filter'
              : 'filter-buttons'
          }
          onClick={() => setCategoryFilter('Earbuds')}
        >
          Earbuds
        </button>
      </div>

      <div className="product-cards-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <ShoppingCart
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default ProductList;
