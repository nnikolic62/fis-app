import { Outlet, useNavigate } from "react-router";
import RootLayout from "@kadrovi/module/root-layout";

export default function KadroviRoute() {
  const navigate = useNavigate();
  return (
    <RootLayout onNavigate={(url) => navigate(url)}>
      <Outlet />
    </RootLayout>
  );
}
