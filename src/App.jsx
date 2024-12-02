import React, { useState } from 'react';
import { products } from './data/products';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartItemsCount={cart.length} toggleCart={toggleCart} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className={`flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          
          {isCartOpen && (
            <div className="w-96">
              <Cart items={cart} removeFromCart={removeFromCart} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-green-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Must be 21 or older to purchase. Please consume responsibly.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;