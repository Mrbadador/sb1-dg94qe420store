import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover object-center"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      {product.thc && (
        <p className="text-sm text-gray-600 mt-1">THC: {product.thc}</p>
      )}
      {product.cbd && (
        <p className="text-sm text-gray-600">CBD: {product.cbd}</p>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;