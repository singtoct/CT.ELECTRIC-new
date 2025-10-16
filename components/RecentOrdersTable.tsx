
import React from 'react';
import type { PackingOrder } from '../types';

interface RecentOrdersTableProps {
  orders: PackingOrder[];
}

const getStatusClass = (status?: PackingOrder['status']) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/20 text-green-400';
    case 'Open':
    case 'Pending':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'Cancelled':
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

const RecentOrdersTable: React.FC<RecentOrdersTableProps> = ({ orders }) => {
  // Sort orders by due date, most recent first, and take the top 10
  const recentOrders = [...orders]
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 10);

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 h-full">
      <h3 className="text-xl font-semibold text-white mb-4">Upcoming Due Dates</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700 text-sm text-gray-400">
              <th className="py-3 pr-2">Product Name</th>
              <th className="py-3 px-2 text-right">Quantity</th>
              <th className="py-3 px-2">Due Date</th>
              <th className="py-3 pl-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                <td className="py-3 pr-2 font-medium text-white truncate max-w-xs">{order.name}</td>
                <td className="py-3 px-2 text-gray-300 text-right">{order.quantity.toLocaleString()}</td>
                <td className="py-3 px-2 text-gray-300">{new Date(order.dueDate).toLocaleDateString('en-CA')}</td>
                <td className="py-3 pl-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(order.status)}`}>
                    {order.status || 'N/A'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrdersTable;
