import React, { useState, useMemo } from 'react';
import StatCard from '../components/StatCard';
import SalesChart from '../components/SalesChart';
import RecentOrdersTable from '../components/RecentOrdersTable';
import OrderDetailPanel from '../components/OrderDetailPanel';
import { MOCK_PACKING_ORDERS } from '../constants';
import type { PackingOrder, Stat, DailyQuantity } from '../types';
import { ClipboardListIcon, SparklesIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedOrder, setSelectedOrder] = useState<PackingOrder | null>(null);

  const handleOrderSelect = (order: PackingOrder) => {
    setSelectedOrder(order);
  };

  const handleClosePanel = () => {
    setSelectedOrder(null);
  };

  const { stats, salesData, upcomingOrders } = useMemo(() => {
    const orders: PackingOrder[] = MOCK_PACKING_ORDERS;
    const nonCompletedOrders = orders.filter(o => o.status !== 'Completed').length;
    
    const stats: Stat[] = [
      {
        title: t('aiProductionForecast'),
        value: '---',
        icon: <SparklesIcon />,
      },
      {
        title: t('qcTasks'),
        value: nonCompletedOrders.toLocaleString(),
        icon: <ClipboardListIcon />,
      },
    ];

    const today = new Date();
    const dailyQuantities: { [key: string]: number } = {};

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        dailyQuantities[dateString] = 0;
    }

    orders.forEach(order => {
        try {
            const orderDateStr = order.dueDate.split('T')[0];
            if (dailyQuantities[orderDateStr] !== undefined) {
                dailyQuantities[orderDateStr] += order.quantity;
            }
        } catch (e) {
            // Ignore orders with invalid dates
        }
    });

    const last7DaysData = Object.keys(dailyQuantities).map(dateString => {
        const date = new Date(dateString);
        return {
            name: date.toLocaleDateString('en-US', { weekday: 'short' }),
            quantity: dailyQuantities[dateString],
        };
    });

    const upcoming = [...orders]
      .filter(o => {
          try {
              return new Date(o.dueDate) >= new Date(new Date().toDateString());
          } catch(e) {
              return false;
          }
      })
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
      .slice(0, 5);

    return { stats, salesData: last7DaysData, upcomingOrders: upcoming };
  }, [t]);

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">{t('dashboard_title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart data={salesData} />
          </div>
          
          <div className="lg:col-span-1">
            <RecentOrdersTable orders={upcomingOrders} onOrderSelect={handleOrderSelect} />
          </div>
        </div>
      </div>
      <OrderDetailPanel order={selectedOrder} onClose={handleClosePanel} />
    </>
  );
};

export default DashboardPage;