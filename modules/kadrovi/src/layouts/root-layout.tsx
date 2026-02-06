import {
  AppSidebar,
} from "@repo/ui/sidebar/appSidebar";
import { AppHeader } from "@repo/ui/appHeader";
import { NavRouteItem } from "@repo/ui/sidebar/types";
import { Outlet, useLocation, useNavigate } from "react-router";
import { navigationItems } from "../navigation/config";

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (item: NavRouteItem) => {
    navigate(item.to, { replace: location.pathname === item.to });
  };


  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">


      <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <AppHeader
          appTitle="Kadrovska"
          userName="Marko Marković"
          userRole="Administrator"
          userInitials="MM"
          searchPlaceholder="Pretraži radnika, rešenje ili izveštaj (Ctrl+K)..."
        />

        <div className="flex flex-1 min-h-0">
          <AppSidebar items={navigationItems} open={true} onNavigate={handleNavigate}/>

          <main className="flex-1 overflow-y-auto p-6 lg:p-8 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
