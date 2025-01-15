import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation(); // Hook to get the current route location

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">
          <Link to="/admin">{/* Link to Admin Profile Page */}
            Admin Dashboard
          </Link>
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/admin/customers" className="hover:underline">
                Customers
              </Link>
            </li>
            <li>
              <Link to="/admin/analytics" className="hover:underline">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="/admin/edit-profile" className="hover:underline">
                Edit Profile
              </Link>
            </li>
            <li>
              <Link to="/admin/change-password" className="hover:underline">
                Change Password
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Show default message only when on the root Admin page */}
        {location.pathname === "/admin" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
            <p>Select an option from the sidebar to manage the platform.</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
              <p>
                You can manage your profile and account settings here. Click on the options in the sidebar to edit your profile or change your password.
              </p>
            </div>
          </div>
        )}

        {/* Render the child route components (like Products, Customers, etc.) */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
