import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  bg-cover bg-center"
    style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/11/09/47/winter-9189662_960_720.jpg')",
        height: "80vh", // Full viewport height
      }}
      >
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your registered email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Send Reset Link
          </button>
          <div className="text-sm text-center mt-4">
                    <p>
                      Did you reset the password?{' '}
                      <Link to="/register" className="text-blue-600 hover:underline">
                        Login
                      </Link>
                    </p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
