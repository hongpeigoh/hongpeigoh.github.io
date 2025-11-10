import { Box, Container, Grid, Typography } from "@mui/material";
import {
  bannerBoxStyle,
  educationBoxStyle,
  experienceBoxStyle,
  miscBoxStyle,
  projectsBoxStyle,
} from "../../-styles/Home";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { MiscCard } from "./MiscCard";
import resumeData from "./mapper/resume.json";
import type {
  EducationData,
  ExperienceData,
  IntroductionData,
  MiscData,
  ProjectData,
} from "./mapper/types";
import { ProjectCard } from "./ProjectCard";

const introductionData: IntroductionData = resumeData.introduction;
const experienceData: ExperienceData[] = resumeData.experiences;
const educationData: EducationData[] = resumeData.education;
const projectData: ProjectData[] = resumeData.projects;
const miscData: MiscData[] = resumeData.misc;

export const Home = () => {
  return (
    <>
      <Box sx={bannerBoxStyle} data-aos="fade-in">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h4" align="justify" data-aos="fade-up">
                {introductionData.welcome}
              </Typography>
              <Typography
                variant="h1"
                align="justify"
                sx={{ fontWeight: "bold" }}
                data-aos="fade-up"
                data-aos-delay="200"
                gutterBottom
              >
                {introductionData.name}
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {introductionData.blurb}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={experienceBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h4"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Experience
              </Typography>
            </Grid>
            {experienceData.map((experience) => (
              <Grid size={{ xs: 12 }} key={experience.duration}>
                <ExperienceCard {...experience} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={educationBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h4"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Education
              </Typography>
            </Grid>
            {educationData.map((education) => (
              <Grid size={{ xs: 12 }} key={education.duration}>
                <EducationCard {...education} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={projectsBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h4"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Projects
              </Typography>
            </Grid>
            {projectData.map((project) => (
              <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={miscBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Typography
                variant="h3"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Miscellaneous
              </Typography>
            </Grid>
            {miscData.map((misc) => (
              <Grid size={{ xs: 12, sm: 6 }} key={misc.title}>
                <MiscCard {...misc} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
