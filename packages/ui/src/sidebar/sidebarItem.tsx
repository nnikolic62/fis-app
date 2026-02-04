"use client";

import { useMemo } from "react";

import type { AppSidebarNavItem, SidebarItemOnSelect } from "./types";

export type SidebarItemProps = {
  item: AppSidebarNavItem;
  isOpen: boolean;
  toggleOpen: () => void;
  onNavigate?: SidebarItemOnSelect;
  activeRouteId?: string;
};

export function SidebarItem({ 
  item, 
  isOpen, 
  toggleOpen, 
  onNavigate,
  activeRouteId 
}: SidebarItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isActiveSection = useMemo(() => {
    if (!activeRouteId || !item.children) return false;
    return item.children.some(child => child.id === activeRouteId);
  }, [activeRouteId, item.children]);

  return (
    <div className="mb-1">
      {/* Section header - clickable to expand/collapse */}
      <button
        onClick={toggleOpen}
        className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
          isOpen || isActiveSection ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
        }`}
        type="button"
      >
        <div className="flex items-center gap-3">
          {item.icon && (
            <span className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </span>
          )}
          <span>{item.label}</span>
        </div>
        {hasChildren && (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>

      {/* Children routes */}
      {hasChildren && (
        <div
          className={`
            grid transition-[grid-template-rows] duration-300 ease-in-out
            ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="pl-5 pr-2 py-1 space-y-1">
              {item.children!.map((child) => {
                const isActive = activeRouteId === child.id;
                return (
                  <a
                    key={child.id}
                    href={child.to}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(child);
                      }
                    }}
                    className={`
                      block w-full text-left px-3 py-2 text-sm rounded-md transition-colors
                      ${isActive 
                        ? "bg-blue-100 text-blue-700 font-medium" 
                        : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                      }
                    `}
                  >
                    {child.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
