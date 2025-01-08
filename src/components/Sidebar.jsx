import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../assets/Sidebar.css'; // Import the CSS file for the transition styles

const Sidebar = ({ closeSidebar }) => {
  return (
    <CSSTransition
      in={true} // Controls the visibility of the sidebar
      timeout={300} // Duration of the transition
      classNames="sidebar" // Transition classes based on 'sidebar' prefix
      unmountOnExit // Ensures the sidebar is removed from the DOM when not visible
    >
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
        onClick={closeSidebar} // Close the sidebar when clicking outside
      >
        <div
          className="w-64 h-full bg-white p-6 fixed left-0 top-0 z-50"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
        >
          {/* Close Button */}
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 text-xl text-gray-800"
          >
            ×
          </button>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Digital Content & Devices */}
            <h4 className="font-semibold text-lg">Digital Content & Devices</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/music" className="hover:text-blue-600">
                 Music
                </Link>
              </li>
              <li>
                <Link to="/kindle" className="hover:text-blue-600">
                  Kindle E-readers & Books
                </Link>
              </li>
            </ul>

            {/* Shop by Department */}
            <h4 className="font-semibold text-lg">Shop by Department</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/electronics" className="hover:text-blue-600">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/computers" className="hover:text-blue-600">
                  Computers
                </Link>
              </li>
              <li>
                <Link to="/smart-home" className="hover:text-blue-600">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link to="/arts-crafts" className="hover:text-blue-600">
                  Arts & Crafts
                </Link>
              </li>
            </ul>

            {/* Programs & Features */}
            <h4 className="font-semibold text-lg">Programs & Features</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/gift-cards" className="hover:text-blue-600">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/shop-by-interest" className="hover:text-blue-600">
                  Shop By Interest
                </Link>
              </li>
            </ul>

            {/* Help & Settings */}
            <h4 className="font-semibold text-lg">Help & Settings</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/your-account" className="hover:text-blue-600">
                  Your Account
                </Link>
              </li>
              <li>
                <Link to="/customer-service" className="hover:text-blue-600">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/sign-in" className="hover:text-blue-600">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
