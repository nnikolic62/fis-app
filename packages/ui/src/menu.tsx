"use client";

import { useState, createContext, useContext, type ReactNode } from "react";

// Types
export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: MenuItem[];
  badge?: string | number;
}

export interface MenuProps {
  items: MenuItem[];
  header?: string;
  activeId?: string;
  onNavigate?: (item: MenuItem) => void;
  collapsed?: boolean;
  className?: string;
}

interface MenuContextValue {
  activeId?: string;
  onNavigate?: (item: MenuItem) => void;
  collapsed?: boolean;
}

const MenuContext = createContext<MenuContextValue>({});

// Icons
function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

// Menu Item Component
function MenuItemComponent({
  item,
  depth = 0,
}: {
  item: MenuItem;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { activeId, onNavigate, collapsed } = useContext(MenuContext);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;

  function handleClick() {
    if (hasChildren) {
      setExpanded(!expanded);
    } else if (onNavigate) {
      onNavigate(item);
    }
  }

  const classes = `
    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
    transition-all duration-150 group no-underline
    ${depth > 0 ? "ml-4 pl-4 border-l-2 border-slate-100" : ""}
    ${isActive 
      ? "bg-blue-50 text-blue-700 font-medium" 
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
    }
  `;

  const content = (
    <>
      {item.icon && (
        <span className={`
          shrink-0 w-5 h-5 flex items-center justify-center
          ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}
        `}>
          {item.icon}
        </span>
      )}
      {!collapsed && (
        <>
          <span className="flex-1 text-sm truncate">{item.label}</span>
          {item.badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
              {item.badge}
            </span>
          )}
          {hasChildren && <ChevronIcon expanded={expanded} />}
        </>
      )}
    </>
  );

  return (
    <div>
      {item.href && !hasChildren ? (
        <a href={item.href} className={classes}>
          {content}
        </a>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className={classes}
          title={collapsed ? item.label : undefined}
        >
          {content}
        </button>
      )}

      {/* Children */}
      {hasChildren && expanded && !collapsed && (
        <div className="mt-1 space-y-1">
          {item.children!.map((child) => (
            <MenuItemComponent key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// Main Menu Component
export function Menu({
  items,
  header,
  activeId,
  onNavigate,
  collapsed = false,
  className = "",
}: MenuProps) {
  return (
    <MenuContext.Provider value={{ activeId, onNavigate, collapsed }}>
      <nav className={`py-4 ${className}`}>
        {/* Header */}
        {header && !collapsed && (
          <div className="px-4 mb-4">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {header}
            </h3>
          </div>
        )}

        {/* Menu Items */}
        <div className="px-2 space-y-1">
          {items.map((item) => (
            <MenuItemComponent key={item.id} item={item} />
          ))}
        </div>
      </nav>
    </MenuContext.Provider>
  );
}

// Default export for convenience
export default Menu;
