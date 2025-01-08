import React, { useState } from "react";

const UserProfile = () => {
  // Initial state for profile data
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "1234 Elm Street",
  });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add logic to save the updated profile (e.g., call API)
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-600">Address</label>
          <textarea
            id="address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your address"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
