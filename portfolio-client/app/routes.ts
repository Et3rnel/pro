import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("resume", "routes/resume.mdx"),
] satisfies RouteConfig;
