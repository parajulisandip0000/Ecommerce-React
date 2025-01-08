import React, { useState } from "react";

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 29.99 },
    { id: 2, title: "Product 2", price: 19.99 },
  ]);

  const handleAddProduct = () => {
    const newProduct = { id: Date.now(), title: "New Product", price: 0 };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add Product Button */}
      <button
        onClick={handleAddProduct}
        className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
      >
        Add Product
      </button>

      <h2 className="text-xl font-semibold mt-6">Manage Products</h2>
      <ul className="space-y-4 mt-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 border rounded"
          >
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Order Management Section */}
      <h2 className="text-xl font-semibold mt-6">Manage Orders</h2>
      <div className="mt-4">
        <p>View and manage customer orders (this can be extended further with actual order data).</p>
      </div>

      {/* Optional: Sales Analytics Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Sales Analytics</h2>
        <p>Optional charts or data displaying sales revenue, product popularity, etc.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
