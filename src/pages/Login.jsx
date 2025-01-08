import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/11/09/47/winter-9189662_960_720.jpg')",
        height: "80vh", // Full viewport height
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
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
            Login
          </button>
        </form>
        <div className="text-sm text-center mt-4">
          <p>
            <Link to="/reset-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </p>
          <p>
            New to our platform?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
