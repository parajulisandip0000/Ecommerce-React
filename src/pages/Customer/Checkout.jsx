import React, { useState } from "react";

const Checkout = () => {
  // Ensure cartItems is initialized as an empty array if there are no items.
  const [cartItems] = useState([
    { id: 1, title: "Product 1", price: 29.99, quantity: 2 },
    { id: 2, title: "Product 2", price: 19.99, quantity: 1 },
  ]);

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Use optional chaining (?.) to handle cases where cartItems might be undefined.
  const totalAmount = (cartItems || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    console.log("Order details:", { billingDetails, paymentMethod, cartItems });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cartItems && cartItems.length > 0 ? (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-semibold">Total:</h3>
            <p className="text-xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>
        </div>

        {/* Billing Details */}
        <div className="border p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              value={billingDetails.name}
              onChange={handleBillingChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleBillingChange}
              placeholder="Email Address"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              value={billingDetails.address}
              onChange={handleBillingChange}
              placeholder="Street Address"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleBillingChange}
              placeholder="City"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="postalCode"
              value={billingDetails.postalCode}
              onChange={handleBillingChange}
              placeholder="Postal Code"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="country"
              value={billingDetails.country}
              onChange={handleBillingChange}
              placeholder="Country"
              className="w-full p-2 border rounded"
              required
            />
          </form>
        </div>
      </div>

      {/* Payment Method */}
      <div className="border p-4 rounded mt-6">
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="creditCard" className="ml-2">
              Credit Card
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal" className="ml-2">
              PayPal
            </label>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 mt-6"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
