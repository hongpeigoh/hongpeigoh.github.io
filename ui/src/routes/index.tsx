import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../-components/Home/Home";
import { Fallback } from "../-components/Layout/Fallback";

export const Route = createFileRoute("/")({
  errorComponent: Fallback,
  component: Home,
});
