import React from "react";

const CustomerOrders = () => {
  const orders = [
    { id: 1, date: "2025-01-01", total: "$120", status: "Shipped" },
    { id: 2, date: "2025-02-01", total: "$85", status: "Delivered" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.date}</td>
              <td className="border p-2">{order.total}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrders;
