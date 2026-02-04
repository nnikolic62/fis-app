import { Outlet, useNavigate } from "react-router";
import RootLayout from "@kadrovi/module/root-layout";

export default function KadroviLayout() {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <RootLayout onNavigate={handleNavigate}>
      <Outlet />
    </RootLayout>
  );
}

