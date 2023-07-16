import Link from "next/link";
import React from "react";
import SalesChart from "./SalesChart";
import TimePeriodSelector from "./TimePeriodSelector";
import VisitorsChart from "./VisitorsChart";

interface Props {
  children: React.ReactNode;
}

const VendorDashboardPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <SalesChart />
      <VisitorsChart />
    </div>
  );
};

export default VendorDashboardPage;
