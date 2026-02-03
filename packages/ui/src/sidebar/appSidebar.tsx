"use client";

import { useState } from "react";

import type { SidebarItemOnSelect } from "./sidebarItem";
import { SidebarItem, type AppSidebarNavItem } from "./sidebarItem";

export type AppSidebarProps = {
  items: AppSidebarNavItem[];
  open: boolean;
  topOffsetClassName?: string;
  className?: string;
  onSelect?: SidebarItemOnSelect;
};

export function AppSidebar({
  items,
  open,
  topOffsetClassName = "top-16",
  className = "",
  onSelect,
}: AppSidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside
      className={`bg-white border-r border-slate-200 fixed left-0 ${topOffsetClassName} bottom-0 z-50 w-64 transition-transform duration-300 transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:translate-x-0 overflow-y-auto shrink-0 ${className}`}
    >
      <nav className="p-4 space-y-1">
        <div className="mb-6">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Glavni Meni
          </p>
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
              isOpen={Boolean(openMenus[item.title])}
              toggleOpen={() => toggleMenu(item.title)}
              onSelect={onSelect}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}

export type { AppSidebarNavItem };
