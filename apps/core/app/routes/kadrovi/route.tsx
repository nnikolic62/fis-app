import { Outlet, useLocation, useNavigate } from "react-router";
import RootLayout from "@kadrovi/module/root-layout";

export default function KadroviLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (url: string) => {
    navigate(url, { replace: location.pathname === url });
  };

  return (
    <RootLayout onNavigate={handleNavigate}>
      <Outlet />
    </RootLayout>
  );
}

