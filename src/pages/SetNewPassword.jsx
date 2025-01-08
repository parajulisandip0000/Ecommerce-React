import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SetNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setError('Password must contain at least one uppercase letter and one number.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess('Password has been successfully reset!');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
    style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/11/09/47/winter-9189662_960_720.jpg')",
        height: "80vh", // Full viewport height
      }}
      >
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Set New Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
          <div className="text-sm text-center mt-4">
          <p>
            Did you set the password?{' '}
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

export default SetNewPassword;
