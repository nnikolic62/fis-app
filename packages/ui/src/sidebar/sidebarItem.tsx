"use client";

import { useMemo } from "react";
import { CaretRightIcon } from "@phosphor-icons/react/CaretRight";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import type { AppSidebarNavItem, SidebarItemOnSelect } from "./types";
import { useTranslation } from "@repo/i18n-config";

export type SidebarItemProps = {
  item: AppSidebarNavItem;
  isOpen: boolean;
  toggleOpen: () => void;
  onNavigate?: SidebarItemOnSelect;
};


export function SidebarItem({
  item,
  isOpen,
  toggleOpen,
  onNavigate,
}: SidebarItemProps) {
  const hasChildren = useMemo(() => item.children && item.children.length > 0, [item.children]);
  const { t } = useTranslation("kadrovi");

  return (
    <div className="mb-1">
      {/* Section header - clickable to expand/collapse */}
      <button
        onClick={toggleOpen}
        className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors rounded-lg ${
          isOpen
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-100"
        }`}
        type="button"
      >
        <div className="flex items-center gap-3">
          {item.icon && ( 
            <span className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </span>
          )}
          <span>{t(item.labelKey)}</span>
        </div>
        {isOpen ? <CaretDownIcon size={16} /> : <CaretRightIcon size={16} />}
      </button>
      {hasChildren && (
      <div
        className={`
          grid transition-[grid-template-rows] duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <div className="pl-5 pr-2 py-1 space-y-1">
            {item.children!.map((child) => (
              <button
                key={child.id}
                className="cursor-pointer block w-full text-left px-2 py-1.5 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                type="button"
                onClick={() =>
                  onNavigate?.(child)
                }
              >
                {t(child.labelKey)}
              </button>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
