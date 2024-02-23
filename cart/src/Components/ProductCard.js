// ProductCard.js
import React, { useState } from 'react';
import './Style.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, image, price, description, rating } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const enteredQuantity = parseInt(event.target.value, 10) || 1;
    setQuantity(Math.min(enteredQuantity, 10));
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <p>Rating: {rating}</p>

      <div>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="10"
        />
        <button onClick={() => onAddToCart(id, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
