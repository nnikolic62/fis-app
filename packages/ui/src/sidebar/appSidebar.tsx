"use client";

import { useState } from "react";

import { SidebarItem } from "./sidebarItem";
import type { AppSidebarNavItem, SidebarItemOnSelect } from "./types";

export type AppSidebarProps = {
  items: AppSidebarNavItem[];
  open: boolean;
  topOffsetClassName?: string;
  className?: string;
  onNavigate?: SidebarItemOnSelect;
};

export function AppSidebar({
  items,
  open,
  topOffsetClassName = "top-16",
  className = "",
  onNavigate,
}: AppSidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside
      className={`bg-white border-r border-slate-200 fixed left-0 ${topOffsetClassName} bottom-0 z-50 w-60 transition-transform duration-300 transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:translate-x-0 overflow-y-auto shrink-0 ${className}`}
    >
      <nav className="p-4 space-y-1">
        <div className="mb-6">
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isOpen={Boolean(openMenus[item.id])}
              toggleOpen={() => toggleMenu(item.id)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}

export type { AppSidebarNavItem, SidebarItemOnSelect };
