import { useMemo, type ReactNode } from "react";

import {
  AppSidebar,
  type AppSidebarNavItem,
} from "@repo/ui/sidebar/appSidebar";
import { UsersIcon } from "@phosphor-icons/react/Users";
import { AppHeader } from "@repo/ui/appHeader";
import { NavRouteItem } from "@repo/ui/sidebar/types";
import { GraduationCapIcon, FileTextIcon, ChartLineIcon, EyeIcon, DatabaseIcon, GitBranchIcon } from "@phosphor-icons/react";

type RootLayoutProps = {
  children: ReactNode;
  onNavigate: (url: string) => void;
};

export default function RootLayout({ children, onNavigate }: RootLayoutProps) {
  const navigationItems = useMemo<AppSidebarNavItem[]>(
    () => [
      {
        id: "maticna-evidencija",
        label: "Matična Evidencija",
        icon: <UsersIcon size={20}/>,
        children: [
          { id: "prijava", label: "Prijava/Odjava radnika", to: "/kadrovi/prijava" },
          { id: "podaci", label: "Podaci o radniku", to: "/kadrovi/podaci" },
          { id: "dokumenti", label: "Dokumenti i Imovina", to: "/kadrovi/dokumenti" },
          { id: "radni-staz", label: "Radni staž (Prethodni/Priznati)", to: "/kadrovi/radni-staz" },
          { id: "pregled-evidencije", label: "Pregled evidencije", to: "/kadrovi/pregled-evidencije" },
        ],
      },
      {
        id: "obrazovanje",
        label: "Obrazovanje",
        icon: <GraduationCapIcon size={20}/>,
        children: [
          { id: "zavrsene-skole", label: "Završene škole", to: "/kadrovi/zavrsene-skole" },
          { id: "sertifikati", label: "Sertifikati i Kursevi", to: "/kadrovi/sertifikati" },
          { id: "posebna-znanja", label: "Posebna znanja i veštine", to: "/kadrovi/posebna-znanja" },
        ],
      },
      {
        id: "sistematizacija",
        label: "Sistematizacija",
        icon: <GitBranchIcon size={20}/>,
        children: [
          { id: "org-struktura", label: "Organizaciona struktura (Stablo)", to: "/kadrovi/org-struktura" },
          { id: "radna-mesta-oj", label: "Radna mesta po OJ", to: "/kadrovi/radna-mesta-oj" },
          { id: "struktura-radnih-mesta", label: "Struktura radnih mesta", to: "/kadrovi/struktura-radnih-mesta" },
          { id: "opisi-poslova", label: "Opisi poslova i Uslovi", to: "/kadrovi/opisi-poslova" },
          { id: "cost-centri", label: "Cost Centri", to: "/kadrovi/cost-centri" },
        ],
      },
      {
        id: "resenja",
        label: "Rešenja",
        icon: <FileTextIcon size={20}/>,
        children: [
          { id: "resenja-rasporedivanje", label: "Rešenja o raspoređivanju", to: "/kadrovi/resenja-rasporedivanje" },
          { id: "resenja-odsustvo", label: "Rešenja o odsustvu", to: "/kadrovi/resenja-odsustvo" },
          { id: "godisnji-odmori", label: "Godišnji odmori", to: "/kadrovi/godisnji-odmori" },
          { id: "masovni-unos", label: "Masovni unos rešenja", to: "/kadrovi/masovni-unos" },
        ],
      },
      {
        id: "izvestaji",
        label: "Izveštaji",
        icon: <ChartLineIcon size={20}/>,
        children: [
          { id: "maticna-knjiga", label: "Matična knjiga radnika", to: "/kadrovi/maticna-knjiga" },
          { id: "spiskovi-zaposlenih", label: "Spiskovi zaposlenih", to: "/kadrovi/spiskovi-zaposlenih" },
          { id: "izvestaj-odsustva", label: "Izveštaj o odsustvima", to: "/kadrovi/izvestaj-odsustva" },
          { id: "statistika-obrazovanja", label: "Statistika obrazovanja", to: "/kadrovi/statistika-obrazovanja" },
        ],
      },
      {
        id: "pregledi",
        label: "Pregledi",
        icon: <EyeIcon size={20}/>,
        children: [
          { id: "pregled-radnik", label: "Pregled po radniku", to: "/kadrovi/pregled-radnik" },
          { id: "pregled-oj", label: "Pregled po OJ", to: "/kadrovi/pregled-oj" },
          { id: "istorija-promena", label: "Istorija promena", to: "/kadrovi/istorija-promena" },
        ],
      },
      {
        id: "sifarnici",
        label: "Šifarnici",
        icon: <DatabaseIcon size={20}/>,
        children: [
          { id: "sifarnik-skola", label: "Šifarnik škola", to: "/kadrovi/sifarnik-skola" },
          { id: "sifarnik-mesta", label: "Šifarnik mesta", to: "/kadrovi/sifarnik-mesta" },
          { id: "banke", label: "Banke", to: "/kadrovi/banke" },
          { id: "vrste-odsustva", label: "Vrste odsustva", to: "/kadrovi/vrste-odsustva" },
        ],
      },
    ],
    [],
  );

  const handleNavigate = (item: NavRouteItem) => {
    // setActiveRouteId(item.id); 
    onNavigate(item.to);
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
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
