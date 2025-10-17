import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ProductManagementPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-6">{t('productManagement')}</h2>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 text-center">
                <p className="text-gray-400">{t('pageUnderConstruction')}</p>
            </div>
        </div>
    );
};

export default ProductManagementPage;
