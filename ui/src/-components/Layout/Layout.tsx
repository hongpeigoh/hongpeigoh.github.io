import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { viewportStyle } from "../../-styles/Layout";

export const Layout = () => (
  <Box sx={viewportStyle}>
    <Outlet />
  </Box>
);
