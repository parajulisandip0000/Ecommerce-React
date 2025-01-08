import React from "react";

const Categories = () => {
  const categories = ["Electronics", "Fashion", "Home & Kitchen", "Beauty"];

  return (
    <div className="max-w-6xl mx-auto my-8">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Shop by Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <img src="https://via.placeholder.com/150" alt={category} className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-2 text-lg font-medium text-gray-800">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
