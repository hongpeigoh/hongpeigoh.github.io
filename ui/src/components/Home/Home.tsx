import { Box, Container, Grid, Typography } from "@mui/material";
import {
  bannerBoxStyle,
  educationBoxStyle,
  experienceBoxStyle,
  miscBoxStyle,
  projectsBoxStyle,
} from "../../styles/Home";
import { ExperienceCard } from "./ExperienceCard";
import { EducationCard } from "./EducationCard";
import { ProjectCard } from "./ProjectCard";
import { MiscCard } from "./MiscCard";

import resumeData from "./mapper/resume.json";
import {
  IntroductionData,
  ExperienceData,
  EducationData,
  ProjectData,
  MiscData,
} from "./mapper/types";
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
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
              <Grid item xs={12}>
                <ExperienceCard
                  imgUrl={experience.imgUrl}
                  company={experience.company}
                  role={experience.role}
                  duration={experience.duration}
                  location={experience.location}
                  details={experience.details}
                  tech={experience.tech}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={educationBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
              <Grid item xs={12}>
                <EducationCard
                  imgUrl={education.imgUrl}
                  school={education.school}
                  degree={education.degree}
                  duration={education.duration}
                  location={education.location}
                  grade={education.grade}
                  details={education.details}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={projectsBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
              <Grid item xs={12} sm={6}>
                <ProjectCard
                  imgUrl={project.imgUrl}
                  title={project.title}
                  subtitle={project.subtitle}
                  date={project.date}
                  href={project.href}
                  label={project.label}
                  text={project.text}
                  tech={project.tech}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={miscBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
              <Grid item xs={12} sm={6}>
                <MiscCard
                  imgUrl={misc.imgUrl}
                  title={misc.title}
                  subtitle={misc.subtitle}
                  date={misc.date}
                  href={misc.href}
                  label={misc.label}
                  text={misc.text}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
