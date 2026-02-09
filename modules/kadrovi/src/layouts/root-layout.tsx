import { useState, type CSSProperties, type ReactNode } from "react";

import {
  AppSidebar,
} from "@repo/ui/sidebar/appSidebar";
import { AppHeader } from "@repo/ui/appHeader";
import { Button } from "@repo/ui/button";
import { NavRouteItem } from "@repo/ui/sidebar/types";
import {
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { navigationItems } from "../navigation/nav-items";
import "../config/i18n";

type RootLayoutProps = {
  children: ReactNode;
  onNavigate: (url: string) => void;
};

export default function RootLayout({ children, onNavigate }: RootLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleNavigate = (item: NavRouteItem) => {
    // setActiveRouteId(item.id);
    onNavigate(item.to);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sidebarOffsetStyle = {
    "--sidebar-offset": isSidebarOpen ? "15rem" : "4rem",
  } as CSSProperties;

  return (
    <div
      className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col"
      style={sidebarOffsetStyle}
    >
      <AppHeader
        appTitle="Kadrovska"
        userName="Marko Marković"
        userRole="Administrator"
        userInitials="MM"
        searchPlaceholder="Pretraži radnika, rešenje ili izveštaj (Ctrl+K)..."
        leftSlot={
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="p-2 w-9 h-9"
            onClick={handleToggleSidebar}
            aria-label={isSidebarOpen ? "Zatvori sidebar" : "Otvori sidebar"}
            title={isSidebarOpen ? "Zatvori sidebar" : "Otvori sidebar"}
          >
            {isSidebarOpen ? (
              <CaretLeftIcon size={18} />
            ) : (
              <CaretRightIcon size={18} />
            )}
          </Button>
        }
      />

      <div className="flex flex-1 min-h-0">
        <AppSidebar
          items={navigationItems}
          open={isSidebarOpen}
          onRequestOpen={() => setIsSidebarOpen(true)}
          onNavigate={handleNavigate}
        />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
