import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import SalesChart from './components/SalesChart';
import RecentOrdersTable from './components/RecentOrdersTable';
import AiSummary from './components/AiSummary';
import { MOCK_SALES_DATA, MOCK_PACKING_ORDERS, MOCK_STATS } from './constants';
import type { PackingOrder, Stat, SalesData } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const stats: Stat[] = MOCK_STATS;
  const salesData: SalesData[] = MOCK_SALES_DATA;
  const orders: PackingOrder[] = MOCK_PACKING_ORDERS;

  // Combine all data for AI summary
  const dashboardData = {
    stats,
    salesData,
    orders,
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-gray-200 font-sans">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-900 p-6">
          <div className="container mx-auto">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content: Charts and AI Summary */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <SalesChart data={salesData} />
                <AiSummary data={dashboardData} />
              </div>
              
              {/* Side Content: Recent Orders */}
              <div className="lg:col-span-1">
                <RecentOrdersTable orders={orders} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
