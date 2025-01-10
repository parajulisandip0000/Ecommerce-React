import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaShoppingCart, FaBars, FaHeart } from "react-icons/fa"; // Added FaHeart for Wishlist

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Navbar (Sticky) */}
      <header className="bg-gray-800 text-white py-4 sticky top-0 shadow-md z-50">
        <div className="flex justify-between items-center container mx-auto px-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold">
            Online Shopping Mart
          </Link>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-lg mx-4 relative z-10">
            <input
              type="text"
              placeholder="Search for products..."
              className="p-2 rounded-l-lg w-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            <button className="p-2 bg-yellow-500 text-white rounded-r-lg">
              Search
            </button>
          </div>

          {/* Login, Wishlist, and Cart */}
          <div className="flex space-x-4">
            <Link to="/login" className="text-white hover:text-yellow-500">
              Login
            </Link>
            <Link
              to="/wishlist"
              className="text-white hover:text-yellow-500 flex items-center"
            >
              <FaHeart className="mr-2" /> Wishlist {/* Wishlist Icon */}
            </Link>
            <Link
              to="/cart"
              className="text-white hover:text-yellow-500 flex items-center"
            >
              <FaShoppingCart className="mr-2" /> Cart {/* Shopping Cart Icon */}
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Navbar with Categories and Links */}
      <nav className="bg-gray-700 text-white">
        <div className="container mx-auto py-2 flex space-x-6 px-4">
          {/* Links */}
          <button
            onClick={toggleSidebar}
            className="flex items-center hover:text-yellow-500 text-white"
          >
            <FaBars className="mr-2" /> All {/* Hamburger Icon */}
          </button>
          <Link to="/deals" className="hover:text-yellow-500">
            Today's Deals
          </Link>
          <Link to="/customer-service" className="hover:text-yellow-500">
            Customer Service
          </Link>
          <Link to="/registry" className="hover:text-yellow-500">
            Registry
          </Link>
          <Link to="/gift-cards" className="hover:text-yellow-500">
            Gift Cards
          </Link>
        </div>
      </nav>

      {/* Sidebar Component */}
      {isSidebarOpen && <Sidebar closeSidebar={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
