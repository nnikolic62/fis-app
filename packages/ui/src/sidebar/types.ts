import { ReactNode } from "react";

export type NavRouteItem = {
    id: string;
    label: string;
    to: string;
    icon?: ReactNode;
  };
  
  export type AppSidebarNavItem = {
    id: string;
    label: string;
    icon?: ReactNode;
    to?: string;
    children?: NavRouteItem[];
  };
  
  export type SidebarItemOnSelect = (item: NavRouteItem) => void;