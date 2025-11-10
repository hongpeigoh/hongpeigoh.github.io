import { createFileRoute } from "@tanstack/react-router";
import { Nusc } from "../../-components/Nusc/Nusc";

export const Route = createFileRoute("/widgets/nusc")({
  component: Nusc,
});
