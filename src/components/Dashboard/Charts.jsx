import React from "react";
import RevenueChart from "./RevenueChart";
import SalesChart from "./SalesChart";

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Charts will go here */}
      <div className="lg:col-span-2">
        <RevenueChart />
      </div>
      <div className="space-y-6">
        <SalesChart />
      </div>
    </div>
  );
};

export default Charts;
