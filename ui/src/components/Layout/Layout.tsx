import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { Box } from "@mui/material";
import { viewportStyle } from "../../styles/Layout";

export const Layout = () => (
  <Box sx={viewportStyle}>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </Box>
);
