import React from "react";

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 Error</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-blue-500 text-white py-2 px-6 mt-6 rounded hover:bg-blue-600"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
