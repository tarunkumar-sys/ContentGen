import React from "react";
import { Sidebar } from "./_components/sidebar";
import { AIUsage } from "./_components/ai-usage";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <Sidebar />
        // Add AI Usage component here
        <AIUsage />
      </div>
      <div className="md:ml-64 h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
