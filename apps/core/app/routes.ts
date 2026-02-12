import { type RouteConfig, index, route } from "@react-router/dev/routes";
import kadroviRoutes from "@kadrovi/module/routes";

export default [
  index("routes/_index.tsx"),
  route("login", "routes/login.tsx"),
  route("home", "routes/home.tsx"),
  ...kadroviRoutes,
] satisfies RouteConfig;
