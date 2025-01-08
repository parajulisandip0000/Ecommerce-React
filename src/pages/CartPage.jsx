import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import Delete Icon

const CartPage = () => {
  // Static cart items with quantity and selected state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Camera",
      price: "$199",
      originalPrice: "$299",
      quantity: 1,
      selected: false,
      image:
        "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    },
    {
      id: 2,
      title: "Smartphone",
      price: "$499",
      originalPrice: "$599",
      quantity: 2,
      selected: false,
      image:
        "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
    },
    {
      id: 3,
      title: "Arduino Kit",
      price: "$79",
      originalPrice: "$99",
      quantity: 1,
      selected: false,
      image:
        "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg",
    },
  ]);

  // Update quantity (editable input)
  const handleQuantityChange = (id, value) => {
    if (value >= 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: parseInt(value) } : item
        )
      );
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  // Select all items
  const selectAllItems = (selected) => {
    setCartItems(cartItems.map((item) => ({ ...item, selected })));
  };

  // Delete selected items
  const deleteSelectedItems = () => {
    setCartItems(cartItems.filter((item) => !item.selected));
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  // Calculate subtotal (items count)
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto flex">
        {/* Left Column (Cart Items) */}
        <div className="w-2/3 pr-8">
          <h2 className="text-4xl font-bold text-center mb-8">Your Cart</h2>

          {/* Select All and Delete All Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                onChange={(e) => selectAllItems(e.target.checked)}
                className="h-5 w-5"
              />
              <span className="text-lg font-semibold">Select All</span>
            </div>
            <button
              onClick={deleteSelectedItems}
              className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <FaTrashAlt className="mr-2" /> Delete Selected
            </button>
          </div>

          {/* Cart items list */}
          {cartItems.length === 0 ? (
            <p className="text-xl text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white shadow-md rounded-lg p-6 mb-4"
                >
                  <div className="flex items-center">
                    {/* Checkbox with margin */}
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => {
                        setCartItems(
                          cartItems.map((i) =>
                            i.id === item.id
                              ? { ...i, selected: !i.selected }
                              : i
                          )
                        );
                      }}
                      className="h-5 w-5 mr-4" 
                    />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover mr-6"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">{item.title}</h4>
                      <p className="text-gray-600">
                        {item.price} × {item.quantity}
                      </p>
                      {/* Price Update for Quantity */}
                      <p className="text-lg font-semibold">
                        Total: $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4 ml-6">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 text-black p-2 rounded-full disabled:opacity-50"
                      disabled={item.quantity === 0}
                    >
                      -
                    </button>

                    {/* Editable Quantity Input */}
                    <input
                      type="number"
                      value={item.quantity}
                      min="0"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 text-center text-lg font-semibold p-2 border border-gray-300 rounded-md"
                    />

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 text-black p-2 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Item Button */}
                  <button
                    onClick={() => {
                      setCartItems(cartItems.filter((i) => i.id !== item.id));
                    }}
                    className="ml-4 text-red-600"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Order Summary) */}
        <div className="w-1/3 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          {/* Location */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Delivery Location</h4>
            <p>Basghari Area, Banepa, Bagmati Province</p>
          </div>

          {/* Subtotal */}
          <div className="mb-4 flex justify-between">
            <span className="text-lg font-semibold">Subtotal ({calculateSubtotal()} items)</span>
            <span className="text-lg">Rs. {calculateTotal()}</span>
          </div>

          {/* Shipping Fee */}
          <div className="mb-4 flex justify-between">
            <span className="text-lg font-semibold">Shipping Fee</span>
            <span className="text-lg">Rs. 0</span>
          </div>

          {/* Total */}
          <div className="mb-6 flex justify-between">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-xl font-semibold">Rs. {calculateTotal()}</span>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
