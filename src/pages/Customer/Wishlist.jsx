import React, { useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      discountedPrice: 24.99,
      image: "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      discountedPrice: 15.99,
      image: "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  // Toggle checkbox for a specific item
  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle all items selection
  const toggleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]); // Deselect all
    } else {
      setSelectedItems(wishlistItems.map((item) => item.id)); // Select all
    }
  };

  // Delete selected items
  const deleteSelectedItems = () => {
    setWishlistItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {/* Select All and Delete Selected Buttons */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={toggleSelectAll}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          {selectedItems.length === wishlistItems.length
            ? "Deselect All"
            : "Select All"}
        </button>
        {selectedItems.length > 0 && (
          <button
            onClick={deleteSelectedItems}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete Selected
          </button>
        )}
      </div>

      {wishlistItems.length > 0 ? (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-4 border rounded"
            >
              {/* Checkbox */}
              <div>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelectItem(item.id)}
                  className="mr-4"
                />
              </div>

              {/* Product Image */}
              <div className="w-24 h-24">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>

              {/* Price Details */}
              <div className="flex flex-col items-center space-y-1 mx-6">
                <p className="text-gray-600 line-through">${item.price}</p>
                <p className="text-red-500 font-bold">${item.discountedPrice}</p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col items-center space-y-3 ml-8">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
                
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
