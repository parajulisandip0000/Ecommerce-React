import React from "react";
import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  // Sample customer data, replace it with actual data from your backend
  const customerData = {
    profilePicture: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg", // Replace with actual image URL
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Springfield, IL, 62701, USA",
    joined: "January 1, 2020",
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Profile Picture and Basic Info */}
        <div className="flex items-center space-x-6">
          <img
            src={customerData.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">{customerData.name}</h2>
            <p className="text-gray-600">{customerData.email}</p>
            <p className="text-gray-600">{customerData.phone}</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-800">{customerData.address}</p>
        </div>

        {/* Joined Date */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Member Since</h3>
          <p className="text-gray-800">{customerData.joined}</p>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-end">
          <Link to="/customer/settings"><button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Edit Profile
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
