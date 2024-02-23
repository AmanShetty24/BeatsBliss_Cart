// App.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import './Components/Style.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'https://media.croma.com/image/upload/v1674045768/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/239032_0_ogo1io.png',
      price: 100,
      description: 'High-quality wireless headphones',
      category: 'Headphones',
      rating: 4.5,
      quantity: 5,
    },
    {
      id: 2,
      name: 'Comfortable Fit Earbuds',
      image: 'https://m.media-amazon.com/images/I/61FbpxTNOKL._AC_UF1000,1000_QL80_.jpg',
      price: 50,
      description: 'Comfortable fit earbuds with great sound',
      category: 'Earbuds',
      rating: 4.0,
      quantity: 3,
    },
    {
      id: 3,
      name: 'Comfortable Headphones',
      image: 'https://m.media-amazon.com/images/I/41JACWT-wWL._AC_UF1000,1000_QL80_.jpg',
      price: 50,
      description: 'Comfortable headphones with great sound',
      category: 'Headphones',
      rating: 4.0,
      quantity: 10,
    },
  ]);

  const [searchResults, setSearchResults] = useState([]);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct.quantity > 0) {
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
      // Update the product quantity in the products array
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
        )
      );
    } else {
      alert(`Product with id ${productId} is out of stock`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    // Filter out the product with the given id from the cart
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    // Update the product quantity in the products array
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the search results
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} onSearch={handleSearch} />
      <ProductList
        products={searchResults.length > 0 ? searchResults : products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cart={cart}
      />
    </div>
  );
};

export default App;
