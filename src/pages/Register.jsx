import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
    style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/11/09/47/winter-9189662_960_720.jpg')",
        height: "80vh", // Full viewport height
      }}
      >
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="text-sm text-center mt-4">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
