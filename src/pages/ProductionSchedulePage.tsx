import React, { useState, useMemo } from 'react';
import type { PackingOrder } from '../types';
import { MOCK_PACKING_ORDERS } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import OrderDetailPanel from '../components/OrderDetailPanel';

const getStatusClass = (status?: PackingOrder['status']) => {
  switch (status) {
    case 'Completed': return 'bg-green-500/20 text-green-400';
    case 'Open':
    case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
    case 'Cancelled': return 'bg-red-500/20 text-red-400';
    default: return 'bg-slate-500/20 text-slate-400';
  }
};

const ProductionSchedulePage: React.FC = () => {
    const { t } = useTranslation();
    const [selectedOrder, setSelectedOrder] = useState<PackingOrder | null>(null);

    const orders = useMemo(() => {
        return [...MOCK_PACKING_ORDERS].sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
    }, []);

    const handleOrderSelect = (order: PackingOrder) => {
        setSelectedOrder(order);
    };

    const handleClosePanel = () => {
        setSelectedOrder(null);
    };

  return (
    <>
    <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">{t('allProductionOrders')}</h2>
        <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-slate-700 text-sm text-gray-400">
                    <th className="py-3 pr-2">{t('productName')}</th>
                    <th className="py-3 px-2 text-right">{t('quantity')}</th>
                    <th className="py-3 px-2">{t('dueDate')}</th>
                    <th className="py-3 px-2">{t('lotNumber')}</th>
                    <th className="py-3 pl-2">{t('status')}</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr 
                        key={order.id} 
                        className="border-b border-slate-700 hover:bg-slate-700/50 cursor-pointer"
                        onClick={() => handleOrderSelect(order)}
                    >
                        <td className="py-3 pr-2 font-medium text-white truncate max-w-xs">{order.name}</td>
                        <td className="py-3 px-2 text-gray-300 text-right">{order.quantity.toLocaleString()}</td>
                        <td className="py-3 px-2 text-gray-300">{new Date(order.dueDate).toLocaleDateString('en-CA')}</td>
                        <td className="py-3 px-2 text-gray-300">{order.lotNumber || 'N/A'}</td>
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
    </div>
    <OrderDetailPanel order={selectedOrder} onClose={handleClosePanel} />
    </>
  );
};

export default ProductionSchedulePage;
