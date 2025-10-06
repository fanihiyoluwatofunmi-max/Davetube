import React, { useState } from 'react';
import { MenuIcon, YouTubeLogo, SearchIcon, MicIcon, CreateVideoIcon, NotificationsIcon } from './Icons';

interface HeaderProps {
    toggleSidebar: () => void;
    onSearch: (query: string) => void;
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, onSearch, onGoHome }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const handleLogoClick = () => {
    setInputValue('');
    onGoHome();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] z-50 flex items-center justify-between px-4 h-14">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-zinc-800" aria-label="Toggle sidebar">
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
        <button onClick={handleLogoClick} className="ml-4" aria-label="YouTube Home">
          <YouTubeLogo className="h-5 w-auto" />
        </button>
      </div>

      <div className="flex items-center flex-1 max-w-2xl mx-4">
        <form onSubmit={handleSubmit} className="flex items-center w-full">
            <input 
                type="text" 
                placeholder="Search" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-[#121212] border border-zinc-700 rounded-l-full px-4 py-2 text-zinc-200 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-zinc-800 border border-zinc-700 border-l-0 px-5 py-2 rounded-r-full hover:bg-zinc-700" aria-label="Search">
                <SearchIcon className="h-6 w-6 text-zinc-400" />
            </button>
        </form>
        <button className="ml-4 p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700" aria-label="Search with your voice">
          <MicIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-zinc-800" aria-label="Create">
          <CreateVideoIcon className="h-6 w-6 text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-zinc-800" aria-label="Notifications">
          <NotificationsIcon className="h-6 w-6 text-white" />
        </button>
        <img 
            src="https://picsum.photos/seed/user/40/40" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;