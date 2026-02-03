import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("home", "routes/home.tsx"),
  route("kadrovi", "routes/kadrovi/route.tsx", [
    index("routes/kadrovi/index.tsx"),
    route(":id", "routes/kadrovi/$id.tsx"),
  ]),
] satisfies RouteConfig;
