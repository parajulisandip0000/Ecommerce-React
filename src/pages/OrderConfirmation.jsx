import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold mb-6">Thank You for Your Order!</h2>
      <p className="text-lg mb-4">
        Your order has been successfully placed. We will notify you once it ships.
      </p>
      <button
        onClick={() => navigate("/")}
        className="py-2 px-4 bg-blue-600 text-white rounded-lg"
      >
        Return to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
