
import React from 'react';
import { HomeIcon, ShortsIcon, SubscriptionsIcon, YouIcon, HistoryIcon } from './Icons';

interface SidebarProps {
    isOpen: boolean;
}

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean, isCollapsed: boolean }> = ({ icon, label, active, isCollapsed }) => (
    <a href="#" className={`flex items-center px-3 py-2.5 rounded-lg hover:bg-zinc-800 ${active ? 'bg-zinc-700' : ''} ${isCollapsed ? 'flex-col h-auto py-4' : ''}`}>
        <div className="w-6 h-6 mr-6">{icon}</div>
        <span className={`text-sm ${isCollapsed ? 'mt-1 text-[10px]' : ''}`}>{label}</span>
    </a>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const mainLinks = [
        { icon: <HomeIcon className="w-full h-full" />, label: "Home", active: true },
        { icon: <ShortsIcon className="w-full h-full" />, label: "Shorts" },
        { icon: <SubscriptionsIcon className="w-full h-full" />, label: "Subscriptions" },
    ];

    const secondaryLinks = [
        { icon: <YouIcon className="w-full h-full" />, label: "You" },
        { icon: <HistoryIcon className="w-full h-full" />, label: "History" },
    ];

    if (!isOpen) {
        return (
            <aside className="fixed top-14 left-0 h-full bg-[#0f0f0f] z-40 w-20 px-2 py-4 hidden md:block">
                <nav className="flex flex-col space-y-1">
                    {mainLinks.map(link => (
                        <SidebarItem key={link.label} icon={link.icon} label={link.label} active={link.active} isCollapsed={true} />
                    ))}
                     <SidebarItem icon={secondaryLinks[0].icon} label={secondaryLinks[0].label} isCollapsed={true} />
                </nav>
            </aside>
        );
    }
  
    return (
        <aside className="fixed top-14 left-0 h-full bg-[#0f0f0f] z-40 w-60 p-3 pr-5 overflow-y-auto">
            <nav className="flex flex-col space-y-1">
                {mainLinks.map(link => (
                    <SidebarItem key={link.label} icon={link.icon} label={link.label} active={link.active} isCollapsed={false} />
                ))}
            </nav>
            <hr className="border-zinc-700 my-4" />
            <nav className="flex flex-col space-y-1">
                {secondaryLinks.map(link => (
                    <SidebarItem key={link.label} icon={link.icon} label={link.label} isCollapsed={false} />
                ))}
            </nav>
        </aside>
  );
};

export default Sidebar;
