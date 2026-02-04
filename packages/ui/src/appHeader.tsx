"use client";

import type { ReactNode } from "react";
import { ListIcon } from "@phosphor-icons/react/List";
import { Button } from "./button";
import { Input } from "./input";
import { BellIcon } from "@phosphor-icons/react/Bell";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/MagnifyingGlass";

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
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden p-2"
          >
            <ListIcon size={20} />
          </Button>
        ) : null}

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            HR
          </div>
          <span className="text-xl font-bold text-slate-800">{appTitle}</span>
        </div>

        {leftSlot}

        {showSearch ? (
          <div className="hidden md:block w-xs max-w-full ml-15">
            <Input
              fullWidth
              placeholder={searchPlaceholder}
              leftIcon={<MagnifyingGlassIcon size={18} />}
              className="bg-slate-100 border-none focus:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
            />
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        {rightSlot}

        <Button
          variant="ghost"
          size="sm"
          className="relative rounded-full w-10 h-10 p-0"
        >
          <BellIcon size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{userName}</p>
            {userRole ? (
              <p className="text-xs text-slate-500">{userRole}</p>
            ) : null}
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold border border-blue-200">
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}
