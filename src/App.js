import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPage from './pages/CartPage';
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import Wishlist from "./pages/Wishlist";
import OrderConfirmation from "./pages/OrderConfirmation";
import AdminDashboard from "./pages/AdminDashboard";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import SingleProductPage from './pages/SingleProductPage'; // Make sure it's consistent
import ResetPassword from "./pages/ResetPassword";
import SetNewPassword from "./pages/SetNewPassword";

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
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route path="/cart" element={<CartPage />} /> {/* Cart page route */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/set-new-password" element={<SetNewPassword />} />
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
