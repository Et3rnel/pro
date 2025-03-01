import type { Route } from "./+types/home";
import { Navigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gaëtan PASQUION - Portfolio" },
    { name: "description", content: "Portfolio et dossier de compétences de Gaëtan PASQUION" },
  ];
}

export default function Home() {
  return <Navigate to="/resume" replace />;
}
