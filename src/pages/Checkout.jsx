import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart to access cart items
import { useNavigate } from "react-router-dom"; // For redirection after checkout

const Checkout = () => {
  const { cart, clearCart } = useCart(); // Get cart and clearCart function
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // To redirect to the confirmation page after order submission

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order submission (you can add more functionality here, e.g., API call)
    setTimeout(() => {
      // Clear cart and redirect to order confirmation
      clearCart();
      navigate("/order-confirmation");
    }, 2000);
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-lg">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-lg">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-lg">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-lg">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-lg">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg mt-4"
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600">
                      ${item.price.slice(1)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-semibold">
                  ${parseFloat(item.price.slice(1)) * item.quantity}
                </span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between">
              <span className="text-xl font-semibold">Total</span>
              <span className="text-xl font-semibold">${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
