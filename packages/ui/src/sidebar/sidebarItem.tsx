"use client";

import { useMemo } from "react";
import type { ReactNode } from "react";

export type AppSidebarNavItem = {
  title: string;
  icon?: ReactNode;
  children: Array<{ id?: string; label: string }> | string[];
};

export type SidebarItemOnSelect = (payload: {
  sectionTitle: string;
  itemLabel: string;
}) => void;

export type SidebarItemProps = {
  item: AppSidebarNavItem;
  isOpen: boolean;
  toggleOpen: () => void;
  onSelect?: SidebarItemOnSelect;
};

function normalizeChildren(children: AppSidebarNavItem["children"]) {
  return children.map((child) => (typeof child === "string" ? { label: child } : child));
}

export function SidebarItem({ item, isOpen, toggleOpen, onSelect }: SidebarItemProps) {
  const children = useMemo(() => normalizeChildren(item.children), [item.children]);

  return (
    <div className="mb-1">
      <button
        onClick={toggleOpen}
        className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
          isOpen ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
        }`}
        type="button"
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.title}</span>
        </div>
      </button>
  
      <div
        className={`
          grid transition-[grid-template-rows] duration-300 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <div className="pl-5 pr-2 py-1 space-y-1">
            {children.map((child) => (
              <button
                key={child.id ?? child.label}
                className="cursor-pointer block w-full text-left px-2 py-1.5 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                type="button"
                onClick={() => onSelect?.({ sectionTitle: item.title, itemLabel: child.label })}
              >
                {child.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
