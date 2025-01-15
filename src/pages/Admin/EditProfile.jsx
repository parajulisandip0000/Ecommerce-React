import React, { useState } from "react";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    username: "admin",
    email: "admin@example.com",
    name: "Admin User",
    avatar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Save the profile updates
    alert("Profile updated!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <form onSubmit={handleProfileSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          name="avatar"
          onChange={(e) => setProfile({ ...profile, avatar: e.target.files[0] })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
