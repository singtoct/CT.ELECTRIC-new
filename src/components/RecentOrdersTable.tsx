import React from 'react';
import type { PackingOrder } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface RecentOrdersTableProps {
  orders: PackingOrder[];
}

const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({ orders }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 h-full">
      <h3 className="text-xl font-semibold text-white mb-4">{t('upcomingOrders')}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700 text-sm text-gray-400">
              <th className="py-3 pr-2">{t('productName')}</th>
              <th className="py-3 px-2 text-right">{t('quantity')}</th>
              <th className="py-3 pl-2">{t('dueDate')}</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 pr-2 font-medium text-white truncate max-w-[150px]">{order.name}</td>
                <td className="py-3 px-2 text-gray-300 text-right">{order.quantity.toLocaleString()}</td>
                <td className="py-3 pl-2 text-gray-300">{new Date(order.dueDate).toLocaleDateString('en-CA')}</td>
              </tr>
            ))}
             {orders.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-4 text-gray-500">No upcoming orders.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
