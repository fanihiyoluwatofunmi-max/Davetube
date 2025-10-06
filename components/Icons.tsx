
import React from 'react';

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg>
);

export const YouTubeLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 20" preserveAspectRatio="xMidYMid meet" focusable="false">
        <g>
            <path d="M12.9,16.5c-3-0.2-5.4-2.7-5.2-5.7c0.2-3,2.7-5.4,5.7-5.2c3,0.2,5.4,2.7,5.2,5.7C18.4,14.3,15.9,16.7,12.9,16.5z M8.2,9.8c-0.2,2,1.3,3.8,3.3,4c2,0.2,3.8-1.3,4-3.3c0.2-2-1.3-3.8-3.3-4C10.2,6.3,8.4,7.8,8.2,9.8z" fill="#F00"></path>
            <polygon points="10.9,12.8 10.9,6.8 15.4,9.8" fill="#fff"></polygon>
            <text x="22" y="15.5" fontFamily="Arial, Helvetica, sans-serif" fontSize="16" fontWeight="bold" fill="#fff">DaveTube</text>
        </g>
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></svg>
);

export const MicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z M17.3,11c0,3-2.54,5.1-5.3,5.1 S6.7,14,6.7,11H5c0,3.41,2.72,6.23,6,6.72V21h2v-3.28c3.28-0.49,6-3.31,6-6.72H17.3z"></path></svg>
);

export const CreateVideoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H7v1h10V6zm4-3H3v16h18V3zM4 4h16v14H4V4z"></path></svg>
);

export const NotificationsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.84c2.44.76 4 3.06 4 5.98v5.15l2 1.88z"></path></svg>
);

export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></svg>
);

export const ShortsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M17.77,10.32l-1.2-.5L18,8.07l1.21.51,1.4-3.4-.6-.25-3.09,1.3Zm-3.41-4.83L12.92,7l-1.44-3.56L9.83,4.9,7,4,8.35,6.9,6.5,7.7l.58,1.45,2.18-.92,1.44,3.56,1.64-1.45,2.89,1.21L17.5,10l-2.18.92-1.44-3.56Z"></path></svg>
);

export const SubscriptionsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M10 18v-6l5 3-5 3zm10-10H4v12h16V8zm2-2H2v16h20V6z"></path></svg>
);

export const YouIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-8C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
);

export const HistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M13.01 3.51V2h-2v1.51C6.98 3.99 4 7.58 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-2.98-8.01-7-8.49zm-1.01 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-.5-7H9.5v2h4V7.5h-2V11.5z"></path></svg>
);

export const LikeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg>
);

export const DislikeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M15 5.63 20.66 12 15 18.37V15h-1c-3.96 0-7.14 1.28-9 3.92 2.07-3.83 4.12-6.52 9-6.52h1V5.63M14 3v6h-1c-5.12 0-8.48 2.87-11 7.14 2.61-4.88 5.92-7.85 11-7.85h1V3l8 9-8 9z"></path></svg>
);

export const KebabMenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
);