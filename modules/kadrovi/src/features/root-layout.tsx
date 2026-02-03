import Menu from "@repo/ui/menu";

const menuItems = [
  {
    id: "evidencija",
    label: "Maticna evidencija",
    children: [
      {
        id: "home",
        label: "Pocetna",
        href: "/kadrovi",
      },
      {
        id: "prijava",
        label: "Prijava kadrova",
        href: "/kadrovi/prijava",
      }
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Menu items={menuItems} />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
}