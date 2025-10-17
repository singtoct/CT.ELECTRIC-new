import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import type { TranslationKey } from '../i18n/translations';

// Icon components - these would typically be in separate files
const Icon: React.FC<{ path: string }> = ({ path }) => <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d={path} /></svg>;
const DashboardIcon = () => <Icon path="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />;
const SalesIcon = () => <Icon path="M9 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2zm10-4a2 2 0 100-4 2 2 0 000 4zM3 13a2 2 0 100-4 2 2 0 000 4zm10-4a2 2 0 100-4 2 2 0 000 4z" />;
const ProductionIcon = () => <Icon path="M10 20l-5.5-5.5a8 8 0 1111 0L10 20zM10 12a2 2 0 100-4 2 2 0 000 4z" />;
const WarehouseIcon = () => <Icon path="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />;
const AnalyticsIcon = () => <Icon path="M7.225 4.025a.75.75 0 01.25-.53l3-3a.75.75 0 011.05 1.05l-2.47 2.47 2.47 2.47a.75.75 0 11-1.05 1.05l-3-3a.75.75 0 01-.25-.53zM12.775 15.975a.75.75 0 01-.25.53l-3 3a.75.75 0 01-1.05-1.05l2.47-2.47-2.47-2.47a.75.75 0 111.05-1.05l3 3a.75.75 0 01.25.53z" />;
const SettingsIcon = () => <Icon path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />;

interface NavItem {
  key: TranslationKey;
  path: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { key: 'dashboard_title', path: '/', icon: <DashboardIcon /> },
  {
    key: 'salesAndPlanning', path: '/sales', icon: <SalesIcon />,
    children: [
      { key: 'customerManagement', path: '/customers', icon: <></> },
      { key: 'productionPlanning', path: '/production-schedule', icon: <></> },
    ],
  },
  {
    key: 'productionLine', path: '/production', icon: <ProductionIcon />,
    children: [
       { key: 'machineStatus', path: '/machines', icon: <></> },
       { key: 'kanban', path: '/kanban', icon: <></> },
       { key: 'productionLogs', path: '/logs', icon: <></> },
    ]
  },
  {
      key: 'warehouseAndDispatch', path: '/warehouse', icon: <WarehouseIcon />,
      children: [
        { key: 'qualityControl', path: '/qc', icon: <></> },
        { key: 'finishedGoods', path: '/finished-goods', icon: <></> },
      ]
  },
  { key: 'analyticsAndReports', path: '/reports', icon: <AnalyticsIcon /> },
  { key: 'settings', path: '/settings', icon: <SettingsIcon /> },
];


const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<string[]>(['salesAndPlanning']);
  const location = useLocation();

  const toggleSection = (key: TranslationKey) => {
    setOpenSections(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };
  
  const isParentActive = (item: NavItem) => {
    return item.children?.some(child => location.pathname.startsWith(child.path)) ?? false;
  }

  const renderNavItem = (item: NavItem, isSubmenu = false) => {
    if (item.children) {
      const isOpen = openSections.includes(item.key);
      const isActive = isParentActive(item);
      return (
        <div key={item.key}>
          <button onClick={() => toggleSection(item.key)} className={`w-full flex justify-between items-center text-left p-2.5 rounded-lg transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-semibold">{t(item.key)}</span>
            </div>
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <div className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <ul>
              {item.children.map(child => (
                <li key={child.key} className="py-1">{renderNavItem(child, true)}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    const baseClasses = isSubmenu
      ? 'pl-7 py-2 text-sm rounded-md w-full text-left flex'
      : 'flex items-center gap-3 p-2.5 rounded-lg';

    return (
      <NavLink to={item.path} key={item.key} className={({ isActive }) => `${baseClasses} transition-colors ${isActive ? 'bg-green-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`} end>
        {!isSubmenu && item.icon}
        <span className={isSubmenu ? 'font-normal' : 'font-semibold'}>{t(item.key)}</span>
      </NavLink>
    );
  };

  return (
    <aside className="w-72 flex-shrink-0 bg-[#1A222B] p-4 flex flex-col h-screen overflow-y-auto">
      <div className="flex items-center gap-3 mb-6 p-2.5">
          <img src="https://i.imgur.com/8Q7E0A4.png" alt="CT Electric Logo" className="h-8 w-8 object-contain" />
        <h1 className="text-xl font-bold text-white">CT.ELECTRIC</h1>
      </div>
      <div className="relative mb-4">
        <input type="text" placeholder={t('search')} className="w-full bg-[#2E3740] text-white placeholder-gray-400 rounded-lg py-2 pl-10 pr-4 focus:outline-none" />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <nav className="flex-grow space-y-2">
        {navItems.map(item => <div key={item.key}>{renderNavItem(item)}</div>)}
      </nav>
      <div className="mt-auto pt-4 text-center text-xs text-gray-500">
        CT ELECTRIC © 2025
      </div>
    </aside>
  );
};

export default Sidebar;
