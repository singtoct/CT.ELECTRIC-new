import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import SalesChart from './components/SalesChart';
import RecentOrdersTable from './components/RecentOrdersTable';
import { MOCK_PACKING_ORDERS } from './constants';
import { ClipboardListIcon, SparklesIcon } from './constants';
import type { PackingOrder, Stat, DailyQuantity } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { useTranslation } from './hooks/useTranslation';

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // --- Data Processing ---
  const qcOrdersCount = MOCK_PACKING_ORDERS.filter(o => o.status !== 'Completed').length;

  const SIMULATED_TODAY_FOR_ORDERS = new Date('2025-07-21');
  const upcomingOrders: PackingOrder[] = [...MOCK_PACKING_ORDERS]
    .filter(o => new Date(o.dueDate) >= SIMULATED_TODAY_FOR_ORDERS)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  const SIMULATED_TODAY_FOR_CHART = new Date('2025-07-21');
  const last7DaysData: DailyQuantity[] = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(SIMULATED_TODAY_FOR_CHART);
    date.setDate(date.getDate() - i);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    const totalQuantity = MOCK_PACKING_ORDERS
        .filter(order => order.dueDate === dateString)
        .reduce((sum, order) => sum + (order.quantity || 0), 0);

    return {
        name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        quantity: totalQuantity,
    };
  }).reverse();

  const summaryCards: Stat[] = [
    {
      title: t('aiForecast'),
      value: 'เร็วๆนี้',
      icon: <SparklesIcon />,
    },
    {
      title: t('qcTasks'),
      value: qcOrdersCount.toLocaleString(),
      icon: <ClipboardListIcon />,
    },
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-gray-200 font-sans">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-900 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {summaryCards.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart data={last7DaysData} />
              </div>
              
              <div className="lg:col-span-1">
                <RecentOrdersTable orders={upcomingOrders} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
