import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ProductManagementPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('productManagement')}</h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500">{t('pageUnderConstruction')}</p>
        </div>
    </div>
  );
};

export default ProductManagementPage;
