import { Copyright } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { footerStyle } from "../../styles/Layout";

export const Footer = () => (
  <Box component="footer" sx={footerStyle}>
    <Container maxWidth="sm">
      <Typography variant="subtitle1">
        <Copyright fontSize="small" /> Created by Goh Hong Pei. 2023.
      </Typography>
    </Container>
  </Box>
);
