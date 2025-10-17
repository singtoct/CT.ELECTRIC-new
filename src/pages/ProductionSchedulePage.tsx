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

const SortableHeader: React.FC<{
  label: string;
  sortKey: keyof PackingOrder;
  sortConfig: { key: keyof PackingOrder; direction: 'asc' | 'desc' } | null;
  requestSort: (key: keyof PackingOrder) => void;
  className?: string;
}> = ({ label, sortKey, sortConfig, requestSort, className = '' }) => {
  const isSorted = sortConfig?.key === sortKey;
  const directionIcon = isSorted ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '';

  return (
    <th className={`py-3 px-2 cursor-pointer select-none ${className}`} onClick={() => requestSort(sortKey)}>
      <div className="flex items-center gap-2">
        {label}
        <span className="text-indigo-400">{directionIcon}</span>
      </div>
    </th>
  );
};

const ProductionSchedulePage: React.FC = () => {
    const { t } = useTranslation();
    const [selectedOrder, setSelectedOrder] = useState<PackingOrder | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof PackingOrder; direction: 'asc' | 'desc' }>({ key: 'dueDate', direction: 'desc' });

    const requestSort = (key: keyof PackingOrder) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedOrders = useMemo(() => {
        let sortableItems = [...MOCK_PACKING_ORDERS];

        // Filtering
        if (searchTerm) {
            sortableItems = sortableItems.filter(order =>
                order.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sorting
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const valA = a[sortConfig.key];
                const valB = b[sortConfig.key];

                if (valA === undefined || valA === null) return 1;
                if (valB === undefined || valB === null) return -1;
                
                let comparison = 0;
                if (sortConfig.key === 'dueDate') {
                    comparison = new Date(valA as string).getTime() - new Date(valB as string).getTime();
                } else {
                    if (valA < valB) {
                        comparison = -1;
                    }
                    if (valA > valB) {
                        comparison = 1;
                    }
                }
                
                return sortConfig.direction === 'asc' ? comparison : -comparison;
            });
        }

        return sortableItems;
    }, [searchTerm, sortConfig]);

    const handleOrderSelect = (order: PackingOrder) => {
        setSelectedOrder(order);
    };

    const handleClosePanel = () => {
        setSelectedOrder(null);
    };

  return (
    <>
    <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">{t('allProductionOrders')}</h2>
            <input
                type="text"
                placeholder={t('searchByProductName')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-700 text-gray-200 placeholder-gray-400 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
            />
        </div>
        <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-slate-700 text-sm text-gray-400">
                    <th className="py-3 pr-2 pl-4">{t('productName')}</th>
                    <SortableHeader label={t('quantity')} sortKey="quantity" sortConfig={sortConfig} requestSort={requestSort} className="text-right" />
                    <SortableHeader label={t('dueDate')} sortKey="dueDate" sortConfig={sortConfig} />
                    <th className="py-3 px-2">{t('lotNumber')}</th>
                    <th className="py-3 pl-2 pr-4">{t('status')}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                    {filteredAndSortedOrders.map((order) => (
                    <tr 
                        key={order.id} 
                        className="hover:bg-slate-700/50 cursor-pointer"
                        onClick={() => handleOrderSelect(order)}
                    >
                        <td className="py-3 pr-2 pl-4 font-medium text-white truncate max-w-xs">{order.name}</td>
                        <td className="py-3 px-2 text-gray-300 text-right">{order.quantity.toLocaleString()}</td>
                        <td className="py-3 px-2 text-gray-300">{new Date(order.dueDate).toLocaleDateString('en-CA')}</td>
                        <td className="py-3 px-2 text-gray-300">{order.lotNumber || 'N/A'}</td>
                        <td className="py-3 pl-2 pr-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(order.status)} whitespace-nowrap`}>
                            {order.status || 'N/A'}
                        </span>
                        </td>
                    </tr>
                    ))}
                     {filteredAndSortedOrders.length === 0 && (
                        <tr>
                            <td colSpan={5} className="text-center py-8 text-gray-500">No matching orders found.</td>
                        </tr>
                    )}
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
