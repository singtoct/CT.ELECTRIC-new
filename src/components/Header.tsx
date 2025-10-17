import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import type { Language } from '../i18n/translations';

const Header: React.FC = () => {
    const { language, changeLanguage } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const languages: { code: Language; name: string }[] = [
        { code: 'th', name: 'TH' },
        { code: 'en', name: 'EN' },
        { code: 'zh', name: 'ZH' },
    ];
    
    const currentLang = languages.find(l => l.code === language)?.name || 'TH';

    return (
        <header className="flex items-center justify-end p-4 bg-white border-b border-gray-200 flex-shrink-0 h-16">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1.5 p-2 rounded-md text-gray-600 hover:bg-gray-100 font-semibold">
                       <GlobeIcon />
                       {currentLang}
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-xl z-20 border border-gray-100">
                            {languages.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        changeLanguage(lang.code);
                                        setDropdownOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                    <MoonIcon />
                </button>

                <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                    <BellIcon />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                
                <div className="h-8 w-px bg-gray-200"></div>

                <div className="flex items-center gap-3 cursor-pointer">
                    <img src="https://picsum.photos/40" alt="User" className="w-10 h-10 rounded-full" />
                </div>
            </div>
        </header>
    );
};

const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.293-.293a1 1 0 011.414 0l.293.293m-2 2l2 2m-2-2l-2 2m12-2l-2 2m2-2l2 2M12 22a10 10 0 110-20 10 10 0 010 20z" /></svg>
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>

export default Header;
