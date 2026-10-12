import React from 'react';

interface PlatformLogoProps {
  id: string;
  className?: string;
}

export const PlatformLogo: React.FC<PlatformLogoProps> = ({ id, className = 'w-5 h-5' }) => {
  switch (id) {
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="4.5" className="fill-red-600" />
          <path d="M10 8.75L15.5 12L10 15.25V8.75Z" fill="white" />
        </svg>
      );
    case 'tiktok':
    case 'douyin':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-slate-900 dark:fill-slate-800" />
          <path
            d="M14.5 6.5C14.8 8.2 16 9.3 17.7 9.5V11.8C16.4 11.7 15.3 11.2 14.5 10.4V15C14.5 17.2 12.7 19 10.5 19C8.3 19 6.5 17.2 6.5 15C6.5 12.8 8.3 11 10.5 11C10.8 11 11.1 11 11.4 11.1V13.5C11.1 13.4 10.8 13.3 10.5 13.3C9.5 13.3 8.8 14.1 8.8 15C8.8 15.9 9.5 16.7 10.5 16.7C11.5 16.7 12.2 15.9 12.2 15V6.5H14.5Z"
            fill="white"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5.5" className="fill-rose-600" />
          <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.8" />
          <circle cx="16.2" cy="7.8" r="1" fill="white" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-blue-600" />
          <path
            d="M13.5 22V14.2H16.1L16.5 11.2H13.5V9.3C13.5 8.4 13.8 7.8 15.1 7.8H16.6V5.1C16.3 5.1 15.4 5 14.3 5C12 5 10.5 6.4 10.5 9V11.2H8V14.2H10.5V22H13.5Z"
            fill="white"
          />
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-slate-900 dark:fill-slate-700" />
          <path
            d="M15.8 6.5H18L13.2 12L18.8 17.5H14.4L10.9 13.7L6.9 17.5H4.7L9.8 11.6L4.4 6.5H8.9L12.1 10L15.8 6.5ZM15 16.2H16.2L8.3 7.7H7L15 16.2Z"
            fill="white"
          />
        </svg>
      );
    case 'threads':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-zinc-900 dark:fill-zinc-700" />
          <path
            d="M12.3 7C14.8 7 16.4 8.5 16.5 11.2C16.6 13.8 14.9 15.5 12.3 15.5C10.4 15.5 9.2 14.4 9.2 12.9C9.2 11.4 10.4 10.4 12.1 10.4C13.3 10.4 14.2 10.9 14.5 11.7M15.8 14.8C15 16.5 13.2 17.3 11.4 17.2C8.4 17 6.7 14.9 6.7 11.9C6.7 8.8 8.8 6.5 12.2 6.5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'snapchat':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-amber-400" />
          <path
            d="M12 6.5C9.8 6.5 8.5 8 8.5 10.2V12.2L7 13C6.8 13.1 6.8 13.5 7.1 13.6L8.6 14.1C8.3 15.4 7.2 16.2 6.5 16.4C6.8 17 7.9 17.3 9 17.3C9.6 17.3 10.3 17.8 12 17.8C13.7 17.8 14.4 17.3 15 17.3C16.1 17.3 17.2 17 17.5 16.4C16.8 16.2 15.7 15.4 15.4 14.1L16.9 13.6C17.2 13.5 17.2 13.1 17 13L15.5 12.2V10.2C15.5 8 14.2 6.5 12 6.5Z"
            className="fill-slate-950"
          />
        </svg>
      );
    case 'pinterest':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-red-600" />
          <path
            d="M12.2 6.2C9.1 6.2 7.4 8.3 7.4 10.6C7.4 11.7 8 12.9 8.9 13.3C9.1 13.4 9.2 13.3 9.3 13.1L9.5 12.2C9.5 12 9.5 11.9 9.4 11.7C9.1 11.3 8.9 10.8 8.9 10.2C8.9 8.7 10.1 7.4 12.1 7.4C13.8 7.4 14.9 8.5 14.9 10.1C14.9 12.1 13.9 13.6 12.6 13.6C11.9 13.6 11.3 13 11.5 12.2L12.1 9.8C12.3 9.1 11.8 8.5 11.1 8.5C10.3 8.5 9.6 9.3 9.6 10.4C9.6 11.1 9.9 11.5 9.9 11.5L8.8 16.2C8.6 17 8.7 17.8 8.7 18H10.3L11.1 14.6C11.5 15 12.2 15.2 12.9 15.2C15.2 15.2 16.8 13.1 16.8 10.3C16.8 7.8 14.8 6.2 12.2 6.2Z"
            fill="white"
          />
        </svg>
      );
    case 'reddit':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-orange-600" />
          <ellipse cx="12" cy="13.5" rx="5.5" ry="4" fill="white" />
          <circle cx="10" cy="13" r="0.9" className="fill-orange-600" />
          <circle cx="14" cy="13" r="0.9" className="fill-orange-600" />
          <path d="M10 15.2C10.7 15.8 13.3 15.8 14 15.2" stroke="#EA580C" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M12 9.5L13.2 6.8L15.5 7.3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16.2" cy="7.4" r="1" fill="white" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="4.5" className="fill-sky-700" />
          <path d="M7.2 10.2H9.6V17.5H7.2V10.2ZM8.4 6.5C9.2 6.5 9.8 7.1 9.8 7.9C9.8 8.7 9.2 9.3 8.4 9.3C7.6 9.3 7 8.7 7 7.9C7 7.1 7.6 6.5 8.4 6.5Z" fill="white" />
          <path d="M11.2 10.2H13.5V11.2C13.9 10.5 14.7 10 15.8 10C18.1 10 18.5 11.5 18.5 13.5V17.5H16.1V14C16.1 13.1 16 12 14.8 12C13.6 12 13.5 13 13.5 13.9V17.5H11.2V10.2Z" fill="white" />
        </svg>
      );
    case 'vimeo':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-sky-500" />
          <path
            d="M17.8 9.2C17.6 11.5 16.1 14.5 13 17C11.4 18.3 10.1 18.5 9.3 17.5C8.6 16.7 8 13.8 7.4 11.5C7 10.1 6.5 10.1 5.8 10.6L5 9.6C6.2 8.5 7.4 7.3 8.4 7C9.6 6.7 10.3 7.7 10.6 9.4C11 11.4 11.2 12.7 11.6 12.7C12 12.7 12.7 11.7 13.4 10.3C14.1 8.9 13.4 8.2 12.2 8.7C13.1 6.2 17.9 6.1 17.8 9.2Z"
            fill="white"
          />
        </svg>
      );
    case 'twitch':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-violet-600" />
          <path d="M7.5 6H17.5V13.5L14.5 16.5H12L10 18.5V16.5H7.5V6Z" fill="white" />
          <rect x="11" y="8.5" width="1.5" height="4" className="fill-violet-600" />
          <rect x="14" y="8.5" width="1.5" height="4" className="fill-violet-600" />
        </svg>
      );
    case 'soundcloud':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-orange-500" />
          <path
            d="M11.5 15.5H16.8C18 15.5 19 14.5 19 13.3C19 12.2 18.1 11.2 17 11.1C16.7 9.3 15.2 8 13.3 8C12.6 8 12 8.2 11.5 8.5V15.5Z"
            fill="white"
          />
          <path d="M6 12.5V15.5M8 10.5V15.5M9.8 9.5V15.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'spotify':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-emerald-600" />
          <path d="M7.5 9.8C10.5 8.9 14.2 9.1 16.8 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.2 12.6C10.7 11.9 13.6 12.1 15.8 13.3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9 15.2C11 14.7 13.2 14.8 14.8 15.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'telegram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-sky-600" />
          <path
            d="M17.2 7.2L6.2 11.5C5.6 11.7 5.6 12.2 6.1 12.4L8.9 13.3L15.4 9.2C15.7 9 16 9.1 15.7 9.4L10.5 14.1L10.3 16.9C10.6 16.9 10.8 16.8 11 16.6L12.4 15.2L15.3 17.3C15.8 17.6 16.2 17.4 16.3 16.8L18 8C18.2 7.3 17.7 7 17.2 7.2Z"
            fill="white"
          />
        </svg>
      );
    case 'bluesky':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-sky-500" />
          <path
            d="M12 11.2C10.9 9 8.1 6.7 6.5 7.5C4.8 8.3 5.5 11.5 6.2 12.6C6.9 13.7 8.8 13.8 9.8 13.5C8.2 13.9 6.9 15.1 7.8 16.5C8.7 17.9 10.8 16.8 12 14.5C13.2 16.8 15.3 17.9 16.2 16.5C17.1 15.1 15.8 13.9 14.2 13.5C15.2 13.8 17.1 13.7 17.8 12.6C18.5 11.5 19.2 8.3 17.5 7.5C15.9 6.7 13.1 9 12 11.2Z"
            fill="white"
          />
        </svg>
      );
    default:
      // Monogram badge with distinctive platform accent
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" className="fill-slate-800 dark:fill-slate-700" />
          <path d="M8 9.5L12 7L16 9.5V14.5L12 17L8 14.5V9.5Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      );
  }
};
