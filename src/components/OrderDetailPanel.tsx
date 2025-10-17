import React from 'react';
import type { PackingOrder } from '../types';
// FIX: Changed the import for `TranslationKey` to `../i18n/translations` as it is not exported from `../hooks/useTranslation`.
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../i18n/translations';

interface OrderDetailPanelProps {
  order: PackingOrder | null;
  onClose: () => void;
}

const DetailRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-400">{label}</dt>
    <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2 break-words">{value}</dd>
  </div>
);

const OrderDetailPanel: React.FC<OrderDetailPanelProps> = ({ order, onClose }) => {
  const { t } = useTranslation();

  const getStatusClass = (status?: PackingOrder['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'Open':
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'Cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  const renderValue = (key: keyof PackingOrder, value: any) => {
    if (value === undefined || value === null || value === '') return 'N/A';
    if (key === 'status') {
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(value)}`}>
          {value}
        </span>
      );
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
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${order ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 border-l border-slate-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${order ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-xl font-semibold text-white">{t('orderDetails')}</h2>
                <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-slate-700 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="flex-grow p-6 overflow-y-auto">
                {order && (
                    <dl className="divide-y divide-slate-700">
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