import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { viewportStyle } from "../../styles/Layout";

export const Layout = () => (
  <Box sx={viewportStyle}>
    <Outlet />
  </Box>
);
