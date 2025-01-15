import { Outlet, Link, useLocation } from "react-router-dom";

const CustomerDashboard = () => {
  const location = useLocation(); // Hook to get the current route location

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">
          <Link to="/customer" className="hover:underline">
            Customer Dashboard
          </Link>
        </h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/customer/profile" className="hover:underline">
                Profile Information
              </Link>
            </li>
            <li>
              <Link to="/customer/orders" className="hover:underline">
                Order History
              </Link>
            </li>
            <li>
              <Link to="/customer/wishlist" className="hover:underline">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/customer/settings" className="hover:underline">
                Account Settings
              </Link>
            </li>
            <li>
              <Link to="/customer/cart" className="hover:underline">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Show default message only when on the root Customer page */}
        {location.pathname === "/customer" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the Customer Dashboard</h1>
            <p>Select an option from the sidebar to manage your account.</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
              <p>
                You can view and edit your profile, check your order history, manage your wishlist, or update your account settings here.
              </p>
            </div>
          </div>
        )}

        {/* Render the child route components (like Profile, Orders, etc.) */}
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerDashboard;
