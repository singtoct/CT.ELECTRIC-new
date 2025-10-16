
import React from 'react';
import type { Stat } from '../types';

const StatCard: React.FC<Stat> = ({ title, value, change, changeType, icon }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex items-start justify-between transform hover:-translate-y-1 transition-transform duration-300">
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase">{title}</p>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
        <div className="flex items-center mt-2">
          <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
          <span className="text-xs text-gray-500 ml-2">from last month</span>
        </div>
      </div>
      <div className="bg-slate-700 p-3 rounded-lg text-indigo-400">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;