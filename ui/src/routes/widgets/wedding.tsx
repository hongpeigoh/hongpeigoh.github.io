import { createFileRoute } from "@tanstack/react-router";
import { WeddingHome } from "../../-components/Wedding/WeddingHome";

export const Route = createFileRoute("/widgets/wedding")({
  component: WeddingHome,
});
