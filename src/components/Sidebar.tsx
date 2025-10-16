import React from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navItems = [
    { name: 'ภาพรวมระบบ', icon: <HomeIcon /> },
    { name: 'ตารางการผลิต', icon: <CalendarIcon /> },
    { name: 'รายงาน', icon: <ChartBarIcon /> },
    { name: 'จัดการสินค้า', icon: <CubeIcon /> },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full bg-slate-800 p-4 transition-all duration-300 ease-in-out z-20 hidden md:flex flex-col ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className={`flex items-center gap-3 mb-10 ${isOpen ? 'p-2' : 'justify-center'}`}>
        <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className={`text-2xl font-bold text-white whitespace-nowrap overflow-hidden transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>CT ELECTRIC</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item, index) => (
            <li key={item.name} className="mb-2">
              <a
                href="#"
                title={!isOpen ? item.name : undefined}
                className={`flex items-center gap-4 p-3 rounded-lg text-gray-300 hover:bg-slate-700 transition-colors ${index === 0 ? 'bg-slate-700' : ''} ${!isOpen ? 'justify-center' : ''}`}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <span className={`font-medium whitespace-nowrap overflow-hidden transition-opacity ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'}`}>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// SVG Icon Components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const CubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m0 10l8 4m0-14v10" />
    </svg>
);

export default Sidebar;
