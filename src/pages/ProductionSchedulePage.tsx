import React, { useState, useMemo } from 'react';
import type { PackingOrder } from '../types';
import { MOCK_PACKING_ORDERS } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import OrderDetailPanel from '../components/OrderDetailPanel';

const getStatusClass = (status?: PackingOrder['status']) => {
  switch (status) {
    case 'Completed': return 'bg-green-100 text-green-800';
    case 'Open':
    case 'Pending': return 'bg-yellow-100 text-yellow-800';
    case 'Cancelled': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
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
    <th className={`py-3 px-4 cursor-pointer select-none text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${className}`} onClick={() => requestSort(sortKey)}>
      <div className="flex items-center gap-2">
        {label}
        <span className="text-green-500 text-base">{directionIcon}</span>
      </div>
    </th>
  );
};

const ProductionSchedulePage: React.FC = () => {
    const { t } = useTranslation();
    const [selectedOrder, setSelectedOrder] = useState<PackingOrder | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof PackingOrder; direction: 'asc' | 'desc' }>({ key: 'dueDate', direction: 'asc' });

    const requestSort = (key: keyof PackingOrder) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedOrders = useMemo(() => {
        let sortableItems = [...MOCK_PACKING_ORDERS];

        if (searchTerm) {
            sortableItems = sortableItems.filter(order =>
                order.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

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
                    if (valA < valB) comparison = -1;
                    if (valA > valB) comparison = 1;
                }
                return sortConfig.direction === 'asc' ? comparison : -comparison;
            });
        }
        return sortableItems;
    }, [searchTerm, sortConfig]);

    return (
    <>
    <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{t('productionPlanning')}</h1>
            <input
                type="text"
                placeholder={t('searchByProductName')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white border border-gray-300 text-gray-800 placeholder-gray-400 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 w-full max-w-xs"
            />
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('productName')}</th>
                        <SortableHeader label={t('quantity')} sortKey="quantity" sortConfig={sortConfig} requestSort={requestSort} className="text-right" />
                        <SortableHeader label={t('dueDate')} sortKey="dueDate" sortConfig={sortConfig} />
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('lotNumber')}</th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{t('status')}</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredAndSortedOrders.map((order) => (
                    <tr 
                        key={order.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedOrder(order)}
                    >
                        <td className="py-3 px-4 font-medium text-gray-800 truncate max-w-xs">{order.name}</td>
                        <td className="py-3 px-4 text-gray-600 text-right">{order.quantity.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-600">{new Date(order.dueDate).toLocaleDateString('en-CA')}</td>
                        <td className="py-3 px-4 text-gray-600">{order.lotNumber || 'N/A'}</td>
                        <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusClass(order.status)} whitespace-nowrap`}>
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
    <OrderDetailPanel order={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </>
  );
};

export default ProductionSchedulePage;
