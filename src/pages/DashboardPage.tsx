import React from 'react';
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MOCK_PACKING_ORDERS } from '../constants';
import type { PackingOrder, ProductionData } from '../types';
import { useTranslation } from '../hooks/useTranslation';

// Icon components
const Icon: React.FC<{ path: string, className?: string }> = ({ path, className }) => <svg className={className || "h-6 w-6"} viewBox="0 0 20 20" fill="currentColor"><path d={path} /></svg>;
const SparklesIcon = () => <Icon className="h-8 w-8 text-purple-500" path="M10 2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2.5zM5.75 6.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM14.25 6.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10 15.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM4.03 4.03a.75.75 0 00-1.06-1.06l-1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5zM17.03 4.03a.75.75 0 10-1.06-1.06l-1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5zM2.97 17.03a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 101.06-1.06l-1.5-1.5zM15.97 15.97a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.06-1.06l-1.5-1.5z" />;
const AtomIcon = () => <Icon className="h-8 w-8 text-blue-500" path="M10 2a.75.75 0 01.75.75v1.521a3.25 3.25 0 001.618 2.886l1.246.718a.75.75 0 11-.75 1.3l-1.246-.719a1.75 1.75 0 01-.868-1.542V5.25a.75.75 0 01-.75-.75zM10 18a.75.75 0 01-.75-.75v-1.521a3.25 3.25 0 00-1.618-2.886l-1.246-.718a.75.75 0 11.75-1.3l1.246.719a1.75 1.75 0 01.868 1.542v6.521a.75.75 0 01-.75.75zM4.25 12a.75.75 0 01-.75-.75V8.729a3.25 3.25 0 00-1.618-2.886l-1.246-.718a.75.75 0 11.75-1.3l1.246.719a1.75 1.75 0 01.868 1.542v3.021a.75.75 0 01-.75.75zM15.75 12a.75.75 0 01-.75-.75v-2.521a1.75 1.75 0 01.868-1.542l1.246-.719a.75.75 0 11.75 1.3l-1.246.719a3.25 3.25 0 00-1.618 2.886V11.25a.75.75 0 01-.75.75z" />;
const ListIcon = () => <Icon className="h-6 w-6" path="M3 4.75A.75.75 0 013.75 4h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 4.75zM3 9.75A.75.75 0 013.75 9h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zM3 14.75A.75.75 0 013.75 14h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 14.75z" />;
const CheckboxIcon = () => <Icon className="h-6 w-6" path="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />;
const WarningIcon = () => <Icon className="h-8 w-8 text-yellow-500" path="M10.293 3.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 5.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" />;
const CheckCircleIcon = () => <Icon className="h-10 w-10 text-green-500" path="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />;

const DashboardCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <div className={`bg-white p-5 rounded-lg shadow-sm border border-gray-200 ${className}`}>
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="font-semibold text-gray-700">{title}</h3>
    </div>
    {children}
  </div>
);


const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  const { qcCount, upcomingOrders, productionData, stockStatus } = useMemo(() => {
    const orders: PackingOrder[] = MOCK_PACKING_ORDERS;
    const qc = orders.filter(o => o.status !== 'Completed' && o.status !== 'Cancelled').length;
    const upcoming = [...orders]
      .filter(o => {
          try { return new Date(o.dueDate) >= new Date(new Date().toDateString()); } 
          catch(e) { return false; }
      })
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
      .slice(0, 5);
      
    const today = new Date();
    const dailyProd: { [key: string]: { produced: number; waste: number } } = {};
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        dailyProd[date.toISOString().split('T')[0]] = { produced: 0, waste: 0 };
    }
    // Mock production data
    Object.keys(dailyProd).forEach(key => {
        const randomProd = Math.floor(Math.random() * 300000) + 50000;
        dailyProd[key].produced = randomProd;
        dailyProd[key].waste = Math.floor(randomProd * (Math.random() * 0.05 + 0.01)); // 1-6% waste
    });

    const prodData = Object.keys(dailyProd).map(dateString => {
        const date = new Date(dateString);
        return {
            name: date.toLocaleDateString('th-TH', { weekday: 'short' }),
            ...dailyProd[dateString],
        };
    });
    
    // Mock stock status
    const isStockLow = false; // Change to true to test alert

    return { qcCount: qc, upcomingOrders: upcoming, productionData: prodData, stockStatus: isStockLow ? 'low' : 'normal' };
  }, []);

  return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('dashboard_title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <DashboardCard title={t('aiProductionForecast')} icon={<SparklesIcon />}>
                <div className="text-center py-4">
                   <div className="inline-block bg-purple-100 rounded-full p-3 mb-2">
                       <SparklesIcon />
                   </div>
                   <p className="font-semibold text-gray-600">{t('createSmartPlan')}</p>
                   <p className="text-xs text-gray-400">{t('navigateToPlan')}</p>
                </div>
            </DashboardCard>
            
            <DashboardCard title={t('aiMaterialForecast')} icon={<AtomIcon />}>
                 <div className="text-center py-4 text-red-500 font-mono bg-red-50 rounded-md">
                    ai.malformedJsonResponse
                 </div>
            </DashboardCard>

            <DashboardCard title={t('upcomingOrders5')} icon={<ListIcon />}>
                <ul className="space-y-2 text-sm">
                    {upcomingOrders.map(order => (
                        <li key={order.id} className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-gray-800 truncate max-w-[150px]">{order.name}</p>
                                <p className="text-gray-500">{t('quantity')}: {order.quantity.toLocaleString()}</p>
                            </div>
                            <span className="font-bold text-red-500">{new Date(order.dueDate).toLocaleDateString('th-TH', {day: '2-digit', month:'2-digit', year: 'numeric'})}</span>
                        </li>
                    ))}
                </ul>
            </DashboardCard>

            <DashboardCard title={t('qcTasks')} icon={<CheckboxIcon />}>
                <div className="text-center">
                    <p className="text-6xl font-bold text-gray-800">{qcCount}</p>
                    <p className="text-gray-500">{t('items')}</p>
                </div>
            </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DashboardCard title={t('lowStockAlert')} icon={<WarningIcon />} className="lg:col-span-1">
                 <div className="text-center py-4">
                   {stockStatus === 'normal' ? (
                       <>
                           <CheckCircleIcon />
                           <p className="mt-2 font-semibold text-green-600">{t('stockNormal')}</p>
                       </>
                   ) : (
                       <p className="text-red-500">{t('stockLowAction')}</p>
                   )}
                 </div>
            </DashboardCard>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 lg:col-span-2">
                <h3 className="font-semibold text-gray-700 mb-4">{t('productionSummary7Days')}</h3>
                <div style={{ width: '100%', height: 320 }}>
                    <ResponsiveContainer>
                        <BarChart data={productionData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                            <YAxis stroke="#6b7280" fontSize={12} />
                            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb' }} />
                            <Legend wrapperStyle={{ fontSize: '12px' }} />
                            <Bar dataKey="produced" fill="#22c55e" name={t('produced')} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="waste" fill="#ef4444" name={t('waste')} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
  );
};

export default DashboardPage;
