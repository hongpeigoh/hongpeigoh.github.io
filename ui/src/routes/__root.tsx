import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Aos from "aos";
import { useEffect } from "react";
import { viewportStyle } from "../-styles/Layout";

export const Route = createRootRoute({
  component: () => {
    useEffect(() => {
      Aos.init({
        duration: 600,
        easing: "ease-in-out-cubic",
      });
    }, []);
    return (
      <Box sx={viewportStyle}>
        <Outlet />
      </Box>
    );
  },
});
