import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../i18n/translations';

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { changeLanguage, language } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
  };

  return (
    <header className="flex-shrink-0 flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
      <div className="flex items-center gap-4">
          <button onClick={onToggleSidebar} className="p-2 rounded-md text-gray-400 hover:bg-slate-700 hover:text-white transition-colors">
              <MenuIcon />
          </button>
          <div className="relative hidden md:block">
            {/* The search bar can be re-enabled if needed */}
          </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="relative group">
            <button className="p-2 rounded-md text-gray-400 hover:bg-slate-700 hover:text-white transition-colors">
                <GlobeIcon />
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-slate-700 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a onClick={() => handleLanguageChange('th')} className={`block px-4 py-2 text-sm cursor-pointer ${language === 'th' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-slate-600'}`}>ภาษาไทย</a>
                <a onClick={() => handleLanguageChange('en')} className={`block px-4 py-2 text-sm cursor-pointer ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-slate-600'}`}>English</a>
                <a onClick={() => handleLanguageChange('zh')} className={`block px-4 py-2 text-sm cursor-pointer ${language === 'zh' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-slate-600'}`}>中文</a>
            </div>
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

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 00-9-9m-9 9a9 9 0 019-9" />
    </svg>
)

const BellIcon: React.FC<{className: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default Header;
