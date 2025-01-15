import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      stock: 100,
      description: "This is product 1",
      brand: "Brand A",
      sku: "12345",
      category: "Electronics",
      image: null, // Placeholder for image URL
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      stock: 50,
      description: "This is product 2",
      brand: "Brand B",
      sku: "67890",
      category: "Home Appliances",
      image: null, // Placeholder for image URL
    },
    // Add more products as needed
  ]);

  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    minStock: "",
    maxStock: "",
  });

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    brand: "",
    sku: "",
    category: "",
    image: null, // Will store the image URL or file
  });

  // Function to handle changes in filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to handle changes in new product form
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Function to handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: file,
    }));
  };

  // Function to add a new product
  const handleAddProduct = () => {
    // Here you could add logic to upload the image and get its URL
    setProducts([
      ...products,
      { id: Date.now(), ...newProduct },
    ]);
    setNewProduct({
      name: "",
      price: "",
      stock: "",
      description: "",
      brand: "",
      sku: "",
      category: "",
      image: null,
    });
    setShowModal(false); // Close the modal after adding product
  };

  // Function to filter products based on filters state
  const filteredProducts = products.filter((product) => {
    const { name, category, minPrice, maxPrice, minStock, maxStock } = filters;

    const matchesName = product.name.toLowerCase().includes(name.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice =
      (minPrice ? product.price >= parseFloat(minPrice) : true) &&
      (maxPrice ? product.price <= parseFloat(maxPrice) : true);
    const matchesStock =
      (minStock ? product.stock >= parseInt(minStock) : true) &&
      (maxStock ? product.stock <= parseInt(maxStock) : true);

    return matchesName && matchesCategory && matchesPrice && matchesStock;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      {/* Add Product Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {/* Filter Section */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">Filter Products</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            value={filters.name}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Furniture">Furniture</option>
          </select>
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="minStock"
            placeholder="Min Stock"
            value={filters.minStock}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="maxStock"
            placeholder="Max Stock"
            value={filters.maxStock}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* Product List */}
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Brand</th>
            <th className="border p-2">SKU</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">{product.brand}</td>
              <td className="border p-2">{product.sku}</td>
              <td className="border p-2">
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mr-2">
                  Delete
                </button>
                <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddProduct();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={newProduct.brand}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="sku"
                placeholder="SKU"
                value={newProduct.sku}
                onChange={handleProductChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="file"
                name="image"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
