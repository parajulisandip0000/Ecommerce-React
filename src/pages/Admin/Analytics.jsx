import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DatePicker from "react-datepicker"; // For date range selection
import "react-datepicker/dist/react-datepicker.css"; // Styles for the date picker

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Clothing", "Books", "Accessories"]; // Example categories

  const analyticsData = {
    totalSales: 10500,
    totalCustomers: 120,
    topSellingProducts: [
      { id: 1, name: "Product A", category: "Electronics", sales: 500 },
      { id: 2, name: "Product B", category: "Clothing", sales: 350 },
      { id: 3, name: "Product C", category: "Books", sales: 250 },
    ],
    topViewedProducts: [
      { id: 1, name: "Product X", category: "Electronics", views: 1200 },
      { id: 2, name: "Product Y", category: "Clothing", views: 950 },
      { id: 3, name: "Product Z", category: "Books", views: 800 },
    ],
    monthlySales: [1200, 1500, 1400, 1300, 1700, 1600], // Example data for 6 months
  };

  // Filtered Data
  const filteredTopSellingProducts = analyticsData.topSellingProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (!startDate || !endDate || (new Date() >= startDate && new Date() <= endDate)) // Mocking a date filter
  );

  const filteredTopViewedProducts = analyticsData.topViewedProducts.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (!startDate || !endDate || (new Date() >= startDate && new Date() <= endDate)) // Mocking a date filter
  );

  // Data for Monthly Sales (Bar Chart)
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: analyticsData.monthlySales,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Top Selling Products (Pie Chart)
  const pieChartData = {
    labels: filteredTopSellingProducts.map((product) => product.name),
    datasets: [
      {
        data: filteredTopSellingProducts.map((product) => product.sales),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Data for Top Viewed Products (Line Chart)
  const lineChartData = {
    labels: filteredTopViewedProducts.map((product) => product.name),
    datasets: [
      {
        label: "Views",
        data: filteredTopViewedProducts.map((product) => product.views),
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4, // Smooth curves
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Sales */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Total Sales</h2>
          <p className="text-2xl font-bold text-green-600">
            ${analyticsData.totalSales.toLocaleString()}
          </p>
        </div>

        {/* Total Customers */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Total Customers</h2>
          <p className="text-2xl font-bold text-blue-600">
            {analyticsData.totalCustomers}
          </p>
        </div>
      </div>
      <br></br>
    {/* Filters Section */}
    <div className="flex flex-wrap gap-4 mb-6">
            {/* Date Range Filter */}
            <div>
            <label className="block text-gray-700 font-medium mb-1">
                Date Range:
            </label>
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                isClearable
                className="border rounded px-3 py-2"
            />
            </div>

            {/* Category Filter */}
            <div>
            <label className="block text-gray-700 font-medium mb-1">
                Product Category:
            </label>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded px-3 py-2"
            >
                {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
                ))}
            </select>
            </div>
        </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Monthly Sales Bar Chart */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
          <Bar data={barChartData} />
        </div>

        {/* Top Selling Products Pie Chart */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <Pie data={pieChartData} />
        </div>

        {/* Top Viewed Products Line Chart */}
        <div className="bg-white shadow rounded p-4 col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Top Viewed Products</h2>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
