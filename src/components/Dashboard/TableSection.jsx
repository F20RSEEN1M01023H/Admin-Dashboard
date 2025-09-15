import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "#12345",
    customer: "John Doe",
    product: "Laptop",
    amount: "$1200",
    status: "Completed",
    date: "2023-10-01",
  },
  {
    id: "#12346",
    customer: "Jane Smith",
    product: "Smartphone",
    amount: "$800",
    status: "Pending",
    date: "2023-10-02",
  },
  {
    id: "#12347",
    customer: "Alice Johnson",
    product: "Tablet",
    amount: "$600",
    status: "Cancelled",
    date: "2023-10-03",
  },
  {
    id: "#12348",
    customer: "Bob Brown",
    product: "Headphones",
    amount: "$150",
    status: "Completed",
    date: "2023-10-04",
  },
];

const topProducts = [
  {
    name: "Laptop",
    sales: 150,
    revenue: "$180,000",
    trend: "up",
    change: "+15%",
  },
  {
    name: "Smartphone",
    sales: 200,
    revenue: "$160,000",
    trend: "down",
    change: "-5%",
  },
  {
    name: "Tablet",
    sales: 100,
    revenue: "$90,000",
    trend: "up",
    change: "+10%",
  },
  {
    name: "Headphones",
    sales: 250,
    revenue: "$75,000",
    trend: "up",
    change: "+20%",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border-border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest Customer Orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        {/* Table  */}
        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Customer
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue-500">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.amount}
                    </span>
                  </td>
                  <td
                    className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Top Products */}

      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Most Popular Products
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          {/* Dynamic Data
           */}
          <div className="p-6 space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl outline hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors "
              >
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {product.sales}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {product.revenue}
                  </p>
                  <div className="flex items-center space-x-1">
                    {product.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-emerald-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        product.trend === "up"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {product.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
