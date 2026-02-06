import { ReactNode } from "react";

export type NavRouteItem = {
    id: string;
    labelKey: string;
    to: string;
    icon?: ReactNode;
  };
  
  export type AppSidebarNavItem = {
    id: string;
    labelKey: string;
    icon?: ReactNode;
    to?: string;
    children?: NavRouteItem[];
  };
  
  export type SidebarItemOnSelect = (item: NavRouteItem) => void;