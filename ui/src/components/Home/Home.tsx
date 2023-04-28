import { Box, Container, Typography } from "@mui/material";
import {
  bannerBoxStyle,
  educationBoxStyle,
  experienceBoxStyle,
  introBoxStyle,
  miscBoxStyle,
  projectsBoxStyle,
} from "../../styles/Home";

export const Home = () => (
  <>
    <Box sx={bannerBoxStyle}>
      <Container>
        <Typography variant="h3">Hi there! I'm Hong Pei</Typography>
      </Container>
    </Box>
    <Box sx={introBoxStyle}>
      <Container>Intro</Container>
    </Box>
    <Box sx={experienceBoxStyle}>
      <Container>Experience</Container>
    </Box>
    <Box sx={educationBoxStyle}>
      <Container>Education</Container>
    </Box>
    <Box sx={projectsBoxStyle}>
      <Container>Projects</Container>
    </Box>
    <Box sx={miscBoxStyle}>
      <Container>Misc</Container>
    </Box>
  </>
);
