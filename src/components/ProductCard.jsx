import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <div className="relative">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </Link>
        {/* Wishlist Icon */}
        <button
          className="absolute top-2 right-2 text-red-600 text-xl focus:outline-none"
          onClick={toggleWishlist}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
        
      </div>
      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-red-600 font-bold text-lg">{product.price}</span>
          <span className="text-gray-500 line-through ml-2">
            {product.originalPrice}
          </span>
        </div>
        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
