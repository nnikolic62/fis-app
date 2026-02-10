import { UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { GitBranchIcon } from "@phosphor-icons/react/dist/ssr/GitBranch";
import { FileTextIcon } from "@phosphor-icons/react/dist/ssr/FileText";
import { ChartLineIcon } from "@phosphor-icons/react/dist/ssr/ChartLine";
import { EyeIcon } from "@phosphor-icons/react/dist/ssr/Eye";
import { DatabaseIcon } from "@phosphor-icons/react/dist/ssr/Database";
import { AppSidebarNavItem } from "@repo/ui/sidebar/types";

export const navigationItems: AppSidebarNavItem[] = [
  {
    id: "maticna-evidencija",
    labelKey: "nav.maticna-evidencija.label",
    icon: <UsersIcon size={20} />,
    children: [
      { id: "prijava", labelKey: "nav.maticna-evidencija.prijava", to: "/kadrovi/prijava" },
      { id: "podaci", labelKey: "nav.maticna-evidencija.podaci", to: "/kadrovi/radnik-podaci" },
      { id: "dokumenti", labelKey: "nav.maticna-evidencija.dokumenti", to: "/kadrovi/dokumenti" },
      { id: "radni-staz", labelKey: "nav.maticna-evidencija.radni-staz", to: "/kadrovi/radni-staz" },
      { id: "pregled-evidencije", labelKey: "nav.maticna-evidencija.pregled-evidencije", to: "/kadrovi/pregled-evidencije" },
    ],
  },
  {
    id: "obrazovanje",
    labelKey: "nav.obrazovanje.label",
    icon: <GraduationCapIcon size={20} />,
    children: [
      { id: "zavrsene-skole", labelKey: "nav.obrazovanje.zavrsene-skole", to: "/kadrovi/zavrsene-skole" },
      { id: "sertifikati", labelKey: "nav.obrazovanje.sertifikati", to: "/kadrovi/sertifikati" },
      { id: "posebna-znanja", labelKey: "nav.obrazovanje.posebna-znanja", to: "/kadrovi/posebna-znanja" },
    ],
  },
  {
    id: "sistematizacija",
    labelKey: "nav.sistematizacija.label",
    icon: <GitBranchIcon size={20} />,
    children: [
      { id: "org-struktura", labelKey: "nav.sistematizacija.org-struktura", to: "/kadrovi/org-struktura" },
      { id: "radna-mesta-oj", labelKey: "nav.sistematizacija.radna-mesta-oj", to: "/kadrovi/radna-mesta-oj" },
      { id: "struktura-radnih-mesta", labelKey: "nav.sistematizacija.struktura-radnih-mesta", to: "/kadrovi/struktura-radnih-mesta" },
      { id: "opisi-poslova", labelKey: "nav.sistematizacija.opisi-poslova", to: "/kadrovi/opisi-poslova" },
      { id: "cost-centri", labelKey: "nav.sistematizacija.cost-centri", to: "/kadrovi/cost-centri" },
    ],
  },
  {
    id: "resenja",
    labelKey: "nav.resenja.label",
    icon: <FileTextIcon size={20} />,
    children: [
      { id: "resenja-rasporedivanje", labelKey: "nav.resenja.resenja-rasporedivanje", to: "/kadrovi/resenja-rasporedivanje" },
      { id: "resenja-odsustvo", labelKey: "nav.resenja.resenja-odsustvo", to: "/kadrovi/resenja-odsustvo" },
      { id: "godisnji-odmori", labelKey: "nav.resenja.godisnji-odmori", to: "/kadrovi/godisnji-odmori" },
      { id: "masovni-unos", labelKey: "nav.resenja.masovni-unos", to: "/kadrovi/masovni-unos" },
    ],
  },
  {
    id: "izvestaji",
    labelKey: "nav.izvestaji.label",
    icon: <ChartLineIcon size={20} />,
    children: [
      { id: "maticna-knjiga", labelKey: "nav.izvestaji.maticna-knjiga", to: "/kadrovi/maticna-knjiga" },
      { id: "spiskovi-zaposlenih", labelKey: "nav.izvestaji.spiskovi-zaposlenih", to: "/kadrovi/spiskovi-zaposlenih" },
      { id: "izvestaj-odsustva", labelKey: "nav.izvestaji.izvestaj-odsustva", to: "/kadrovi/izvestaj-odsustva" },
      { id: "statistika-obrazovanja", labelKey: "nav.izvestaji.statistika-obrazovanja", to: "/kadrovi/statistika-obrazovanja" },
    ],
  },
  {
    id: "pregledi",
    labelKey: "nav.pregledi.label",
    icon: <EyeIcon size={20} />,
    children: [
      { id: "pregled-radnik", labelKey: "nav.pregledi.pregled-radnik", to: "/kadrovi/pregled-radnik" },
      { id: "pregled-oj", labelKey: "nav.pregledi.pregled-oj", to: "/kadrovi/pregled-oj" },
      { id: "istorija-promena", labelKey: "nav.pregledi.istorija-promena", to: "/kadrovi/istorija-promena" },
    ],
  },
  {
    id: "sifarnici",
    labelKey: "nav.sifarnici.label",
    icon: <DatabaseIcon size={20} />,
    children: [
      { id: "sifarnik-skola", labelKey: "nav.sifarnici.sifarnik-skola", to: "/kadrovi/sifarnik-skola" },
      { id: "sifarnik-mesta", labelKey: "nav.sifarnici.sifarnik-mesta", to: "/kadrovi/sifarnik-mesta" },
      { id: "banke", labelKey: "nav.sifarnici.banke", to: "/kadrovi/banke" },
      { id: "vrste-odsustva", labelKey: "nav.sifarnici.vrste-odsustva", to: "/kadrovi/vrste-odsustva" },
    ],
  },
];
