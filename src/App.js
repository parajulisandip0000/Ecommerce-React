import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import OrderConfirmation from "./pages/OrderConfirmation";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import SingleProductPage from './pages/SingleProductPage';
import ResetPassword from "./pages/ResetPassword";
import SetNewPassword from "./pages/SetNewPassword";
import Products from "./pages/Admin/Products";
import Customers from "./pages/Admin/Customers";
import Analytics from "./pages/Admin/Analytics";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ChangePassword from "./pages/Admin/ChangePassword";
import EditProfile from "./pages/Admin/EditProfile";
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import CustomerProfile from './pages/Customer/CustomerProfile';
import CustomerOrders from './pages/Customer/CustomerOrders';
import CustomerSettings from './pages/Customer/CustomerSettings';
import CartPage from './pages/Customer/CartPage';
import Checkout from "./pages/Customer/Checkout";
import Wishlist from "./pages/Customer/Wishlist";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Cart Context
import { CartProvider } from './context/CartContext'; // Correct import path

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/set-new-password" element={<SetNewPassword />} />
              <Route path="*" element={<ErrorPage />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<Navigate to="/admin/products" />} /> {/* Default sub-route */}
                <Route path="products" element={<Products />} />
                <Route path="customers" element={<Customers />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="settings" element={<CustomerSettings />} />
                <Route path="change-password" element={<ChangePassword />} />
              </Route>
              
              {/* Customer Routes */}
              <Route path="/customer" element={<CustomerDashboard />}>
                <Route index element={<Navigate to="/customer/profile" />} /> {/* Default sub-route */}
                <Route path="profile" element={<CustomerProfile />} />
                <Route path="orders" element={<CustomerOrders />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="settings" element={<CustomerSettings />} />
              </Route>
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
