import React from 'react';
import type { PackingOrder } from '../types';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../i18n/translations';

interface OrderDetailPanelProps {
  order: PackingOrder | null;
  onClose: () => void;
}

const DetailRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-words">{value}</dd>
  </div>
);

const OrderDetailPanel: React.FC<OrderDetailPanelProps> = ({ order, onClose }) => {
  const { t } = useTranslation();

  const getStatusClass = (status?: PackingOrder['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Open':
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const renderValue = (key: keyof PackingOrder, value: any) => {
    if (value === undefined || value === null || value === '') return <span className="text-gray-400">N/A</span>;
    if (key === 'status') {
      return <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusClass(value)}`}>{value}</span>;
    }
    if (typeof value === 'number') return value.toLocaleString();
    if (key === 'dueDate') return new Date(value).toLocaleDateString('en-CA');
    return String(value);
  }

  const orderDetailsMap: { key: keyof PackingOrder; labelKey: TranslationKey; }[] = [
      { key: 'name', labelKey: 'productName' },
      { key: 'quantity', labelKey: 'quantity' },
      { key: 'dueDate', labelKey: 'dueDate' },
      { key: 'status', labelKey: 'status' },
      { key: 'salePrice', labelKey: 'salePrice' },
      { key: 'quantityDelivered', labelKey: 'quantityDelivered' },
      { key: 'color', labelKey: 'color' },
      { key: 'stock', labelKey: 'stock' },
      { key: 'lotNumber', labelKey: 'lotNumber' },
      { key: 'id', labelKey: 'id' },
      { key: 'customerId', labelKey: 'customerId' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${order ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${order ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <h2 className="text-lg font-semibold text-gray-900">{t('orderDetails')}</h2>
                <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex-grow p-6 overflow-y-auto">
                {order && (
                    <dl className="divide-y divide-gray-200">
                        {orderDetailsMap.map(({ key, labelKey }) => (
                           <DetailRow key={key} label={t(labelKey)} value={renderValue(key, order[key])} />
                        ))}
                    </dl>
                )}
            </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailPanel;
