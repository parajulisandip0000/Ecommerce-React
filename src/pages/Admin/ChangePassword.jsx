import React, { useState } from "react";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwords.newPassword === passwords.confirmPassword) {
      alert("Password changed successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>
      <form onSubmit={handlePasswordChange} className="space-y-4">
        <input
          type="password"
          name="currentPassword"
          value={passwords.currentPassword}
          onChange={handleInputChange}
          placeholder="Current Password"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="newPassword"
          value={passwords.newPassword}
          onChange={handleInputChange}
          placeholder="New Password"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={passwords.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm New Password"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
