import React, { useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", orders: 5 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", orders: 2 },
    { id: 3, name: "Emily Johnson", email: "emily.johnson@example.com", orders: 8 },
  ]);

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({ name: "", email: "" });

  // Handle deleting a customer
  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Handle editing a customer
  const startEditing = (customer) => {
    setEditingCustomer(customer.id);
    setEditedCustomer({ name: customer.name, email: customer.email });
  };

  const saveEdit = (id) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id ? { ...customer, ...editedCustomer } : customer
      )
    );
    setEditingCustomer(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Orders</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border border-gray-300 px-4 py-2">{customer.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {editingCustomer === customer.id ? (
                  <input
                    type="text"
                    value={editedCustomer.name}
                    onChange={(e) =>
                      setEditedCustomer((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  customer.name
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingCustomer === customer.id ? (
                  <input
                    type="email"
                    value={editedCustomer.email}
                    onChange={(e) =>
                      setEditedCustomer((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  customer.email
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">{customer.orders}</td>
              <td className="border border-gray-300 px-4 py-2">
                {editingCustomer === customer.id ? (
                  <button
                    onClick={() => saveEdit(customer.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(customer)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteCustomer(customer.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {customers.length === 0 && (
        <p className="text-gray-600 mt-4">No customers available.</p>
      )}
    </div>
  );
};

export default Customers;
