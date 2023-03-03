import { Box, Container, Typography } from "@mui/material";
import { footerStyle } from "../../styles/Layout";

export const Footer = () => (
  <Box component="footer" sx={footerStyle}>
    <Container maxWidth="sm">
      <Typography variant="body1">
        My sticky footer can be found here.
      </Typography>
    </Container>
  </Box>
);

