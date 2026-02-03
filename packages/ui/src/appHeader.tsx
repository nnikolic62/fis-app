"use client";

import type { ReactNode } from "react";

export type AppHeaderProps = {
  appTitle: string;
  userName: string;
  userRole?: string;
  userInitials: string;
  onToggleSidebar?: () => void;
  showSidebarToggle?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
};

export function AppHeader({
  appTitle,
  userName,
  userRole,
  userInitials,
  onToggleSidebar,
  showSidebarToggle = true,
  showSearch = true,
  searchPlaceholder = "Pretraži...",
  leftSlot,
  rightSlot,
}: AppHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 min-w-0">
        {showSidebarToggle ? (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
            type="button"
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
        ) : null}

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            HR
          </div>
          <span className="text-xl font-bold text-slate-800">{appTitle}</span>
        </div>

        {leftSlot}

        {showSearch ? (
          <div className="relative hidden md:block w-96 max-w-full">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full pl-4 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        {rightSlot}

        <button
          className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full"
          type="button"
          aria-label="Notifications"
        >
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{userName}</p>
            {userRole ? <p className="text-xs text-slate-500">{userRole}</p> : null}
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold border border-blue-200">
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}
