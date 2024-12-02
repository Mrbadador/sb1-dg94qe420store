import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Header({ cartItemsCount, toggleCart }) {
  return (
    <header className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">420 Friendly Store</h1>
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-full hover:bg-green-800 transition-colors"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;