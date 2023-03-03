import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { Box, Container } from "@mui/material";
import { viewportStyle } from "../../styles/Layout";

export const Layout = () => (
  <Box sx={viewportStyle}>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </Box>
);

