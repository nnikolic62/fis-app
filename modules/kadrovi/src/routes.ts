import { type RouteConfig, route, index } from "@react-router/dev/routes";

const kadroviRoutes = route("kadrovi", "routes/kadrovi/route.tsx", [
    index("routes/kadrovi/index.tsx"),
    route("prijava", "routes/kadrovi/prijava.tsx"),
  ]);

  export default [
    kadroviRoutes,
  ] satisfies RouteConfig;