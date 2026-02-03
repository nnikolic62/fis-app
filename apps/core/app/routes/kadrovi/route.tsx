import { Outlet } from "react-router";
import RootLayout from "@kadrovi/module/root-layout";

export default function KadroviLayout() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

