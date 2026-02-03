import Menu from "@repo/ui/menu";

const menuItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
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