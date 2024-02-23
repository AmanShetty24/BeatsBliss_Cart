// ShoppingCart.js
import React from 'react';
import './Style.css';

const ShoppingCart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span className="cart-item-name">{item.name}</span>
            </div>
            <div className="cart-item-controls">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value, 10))}
              />
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
