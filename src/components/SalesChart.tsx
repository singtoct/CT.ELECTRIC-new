import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { DailyQuantity } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface ProductionChartProps {
  data: DailyQuantity[];
}

const SalesChart: React.FC<ProductionChartProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 h-full">
      <h3 className="text-xl font-semibold text-white mb-4">{t('latest7DaysQuantity')}</h3>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#475569',
                color: '#e2e8f0',
              }}
              formatter={(value: number) => [value.toLocaleString(), t('quantity')]}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Bar dataKey="quantity" fill="#6366f1" name={t('quantity')} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
