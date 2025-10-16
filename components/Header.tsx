
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-slate-800 border-b border-slate-700">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-white">Dashboard Overview</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-700 text-gray-200 placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <BellIcon className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://picsum.photos/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className='hidden sm:block'>
            <p className="font-semibold text-white">Admin User</p>
            <p className="text-sm text-gray-400">admin@example.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default Header;
