import { useMemo, useState, type ReactNode } from "react";

import { AppHeader } from "@repo/ui/appHeader";
import {
  AppSidebar,
  type AppSidebarNavItem,
} from "@repo/ui/sidebar/appSidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  const navigationItems = useMemo<AppSidebarNavItem[]>(
    () => [
      {
        title: "Matična Evidencija",
        children: [
          "Prijava/Odjava radnika",
          "Podaci o radniku",
          "Dokumenti i Imovina",
          "Radni staž (Prethodni/Priznati)",
          "Pregled evidencije",
        ],
      },
      {
        title: "Obrazovanje",
        children: [
          "Završene škole",
          "Sertifikati i Kursevi",
          "Posebna znanja i veštine",
        ],
      },
      {
        title: "Sistematizacija",
        children: [
          "Organizaciona struktura (Stablo)",
          "Radna mesta po OJ",
          "Struktura radnih mesta",
          "Opisi poslova i Uslovi",
          "Cost Centri",
        ],
      },
      {
        title: "Rešenja",
        children: [
          "Rešenja o raspoređivanju",
          "Rešenja o odsustvu",
          "Godišnji odmori",
          "Masovni unos rešenja",
        ],
      },
      {
        title: "Izveštaji",
        children: [
          "Matična knjiga radnika",
          "Spiskovi zaposlenih",
          "Izveštaj o odsustvima",
          "Statistika obrazovanja",
        ],
      },
      {
        title: "Pregledi",
        children: ["Pregled po radniku", "Pregled po OJ", "Istorija promena"],
      },
      {
        title: "Šifarnici",
        children: [
          "Šifarnik škola",
          "Šifarnik mesta",
          "Banke",
          "Vrste odsustva",
        ],
      },
    ],
    [],
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <AppHeader
        appTitle="Kadrovska"
        userName="Marko Marković"
        userRole="Administrator"
        userInitials="MM"
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
        searchPlaceholder="Pretraži radnika, rešenje ili izveštaj (Ctrl+K)..."
      />

      <div className="flex flex-1 min-h-0">
        <AppSidebar items={navigationItems} open={sidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
