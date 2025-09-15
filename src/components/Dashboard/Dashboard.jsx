import React from "react";
import StatsGrid from "./StatsGrid";
import Charts from "./Charts";
import TableSection from "./TableSection";
import Activity from "./Activity";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* stats grid  */}
      <StatsGrid />
      {/* Charts  */}
      <Charts />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
