import React from "react";

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, title: "Product 1", price: 29.99 },
    { id: 2, title: "Product 2", price: 19.99 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border rounded"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
