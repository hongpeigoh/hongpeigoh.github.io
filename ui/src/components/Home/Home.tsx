import { Box, Container, Grid, Typography } from "@mui/material";
import {
  bannerBoxStyle,
  educationBoxStyle,
  experienceBoxStyle,
  miscBoxStyle,
  projectsBoxStyle,
} from "../../styles/Home";
import { ExperienceCard } from "./ExperienceCard";
import {
  ApachePlainWordmark,
  FlaskOriginalWordmark,
  GithubOriginalWordmark,
  GitlabOriginalWordmark,
  GrafanaOriginalWordmark,
  JavaOriginalWordmark,
  JavascriptOriginal,
  JenkinsOriginal,
  KotlinOriginal,
  MongodbPlainWordmark,
  MysqlPlainWordmark,
  PrometheusOriginalWordmark,
  PythonOriginalWordmark,
  ReactOriginalWordmark,
  ReduxOriginal,
  SpringOriginalWordmark,
  TailwindcssOriginalWordmark,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";
import { EducationCard } from "./EducationCard";
import { ProjectCard } from "./ProjectCard";
import { MiscCard } from "./MiscCard";

export const Home = () => {
  return (
    <>
      <Box sx={bannerBoxStyle} data-aos="fade-in">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" align="justify" data-aos="fade-up">
                Hello! I am
              </Typography>
              <Typography
                variant="h1"
                align="justify"
                sx={{ fontWeight: "bold" }}
                data-aos="fade-up"
                data-aos-delay="200"
                gutterBottom
              >
                Hong Pei
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                I am an
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
                variant="h3"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ExperienceCard
                imgUrl="https://www.gic.com.sg/wp-content/uploads/2021/03/default-demo.jpg"
                company="GIC Private Limited"
                role="Software Engineer Intern"
                duration="01/2023 - 06/2023"
                location="Singapore"
                details={[
                  "Conducted full clean-up of React front-end styles and subsequently implemented dark mode.",
                  "Refactored and migrated benchmark data pipeline to improve performance and enrich data.",
                  "Led end-to-end deployments, working closely with users for requirements gathering and acceptance testing, and developers for operational support.",
                ]}
                tech={[
                  <TypescriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <JavaOriginalWordmark size={30} />,
                  <SpringOriginalWordmark size={30} />,
                  <GitlabOriginalWordmark size={30} />,
                  <JenkinsOriginal size={30} />,
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <ExperienceCard
                imgUrl="https://www.csit.gov.sg/images/default-source/csit-logo-and-icon/9559_csit-logo_fa-01.png?sfvrsn=948591f4_0"
                company="Centre for Strategic Infocomm Technologies"
                role="Software Engineer Intern"
                duration="05/2022 - 07/2022"
                location="Singapore"
                details={[
                  "Implemented monitoring filters in Spring Gateway to track metrics to better support user requests.",
                  "Integrated Prometheus alerts with Grafana dashboard to monitor application health and usage.",
                  "Assisted in development of translation tool in React frontend to streamline language support.",
                ]}
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <KotlinOriginal size={30} />,
                  <SpringOriginalWordmark size={30} />,
                  <GitlabOriginalWordmark size={30} />,
                  <GrafanaOriginalWordmark size={30} />,
                  <PrometheusOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <ExperienceCard
                imgUrl="https://www.csit.gov.sg/images/default-source/csit-logo-and-icon/9559_csit-logo_fa-01.png?sfvrsn=948591f4_0"
                company="Centre for Strategic Infocomm Technologies"
                role="Data Science Intern"
                duration="11/2019 - 06/2020"
                location="Singapore"
                details={[
                  "Undertook project on multilingual information retrieval, a specialised aspect of machine learning in natural language processing.",
                  "Developed search tool on React with backend in Flask to interface results in an accessible manner.",
                ]}
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <PythonOriginalWordmark size={30} />,
                  <FlaskOriginalWordmark size={30} />,
                  <GithubOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={educationBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <EducationCard
                imgUrl="https://www.cmu.edu/brand/brand-guidelines/images/wordmarksquare-red-600x600.png"
                school="Carnegie Mellon University"
                duration="01/2024 - 12/2024"
                location="Pittsburgh PA, United States"
                details={["Lorem Ipsum"]}
              />
            </Grid>
            <Grid item xs={12}>
              <EducationCard
                imgUrl="https://www.nus.edu.sg/images/default-source/identity-images/NUS_logo_full-horizontal.jpg"
                school="National University of Singapore"
                duration="06/2020 - 12/2023"
                location="Singapore"
                details={["Lorem Ipsum"]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={projectsBoxStyle}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                align="justify"
                gutterBottom
                data-aos="fade-in"
              >
                Projects
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectCard
                imgUrl="/iora2.png"
                title="iORA Integrated Enterprise System"
                subtitle="Information Systems Capstone Project"
                href="https://github.com/AY2122IS4103G10/iORA-ERP"
                label="Repo"
                text="An enterprise system designed to digitise and streamline iORA Fashion's Enterprise Resource Planning, Point-of-Sales and Customer Relationship Management sytems."
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <ReduxOriginal size={30} />,
                  <TailwindcssPlain size={30} />,
                  <JavaOriginalWordmark size={30} />,
                  <SpringOriginalWordmark size={30} />,
                  <img src="/stripe.svg" width={30} height={30} />,
                  <img src="/jwt.svg" width={30} height={30} />,
                  <GithubOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectCard
                imgUrl="/iora1.png"
                title="iORA E-commerce System"
                subtitle="Information Systems Capstone Project"
                href="https://github.com/AY2122IS4103G10/iORA-ERP"
                label="Repo"
                text="An e-commerce system integrated with the iORA Enterprise System, providing customers with a seamless experience while shopping on iORA's online store."
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <ReduxOriginal size={30} />,
                  <TailwindcssPlain size={30} />,
                  <JavaOriginalWordmark size={30} />,
                  <SpringOriginalWordmark size={30} />,
                  <img src="/stripe.svg" width={30} height={30} />,
                  <img src="/jwt.svg" width={30} height={30} />,
                  <GithubOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectCard
                imgUrl="/dag4.png"
                title="EZProperty"
                subtitle="Data Engineering with Airflow"
                href="https://github.com/AY22-23S2-IS3107-Group6/ezproperty"
                label="Repo"
                text="A data engineering project that parses data from HDB, URA, and other third party data sources to understand applications of data in the commercial housing market."
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <PythonOriginalWordmark size={30} />,
                  <ApachePlainWordmark size={30} />,
                  <MysqlPlainWordmark size={30} />,
                  <MongodbPlainWordmark size={30} />,
                  <GithubOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProjectCard
                imgUrl="/mulling1.png"
                title="MulLing"
                subtitle="Multilingual Information Retrieval Project"
                href="https://github.com/hongpeigoh/MulLing"
                label="Repo"
                text="A toolkit to evaluate Information Retrieval Methods in a multilingual setting, providing a platform for initiating a self-trained NLP model referencing Facebook's MUSE."
                tech={[
                  <JavascriptOriginal size={30} />,
                  <ReactOriginalWordmark size={30} />,
                  <PythonOriginalWordmark size={30} />,
                  <FlaskOriginalWordmark size={30} />,
                  <GithubOriginalWordmark size={30} />,
                ]}
              />
            </Grid>
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
            <Grid item xs={12} sm={6}>
              <MiscCard
                imgUrl="/blog.png"
                title="Developing, Applications"
                subtitle="Critical Reflection Portfolio"
                href=""
                label="Portfolio"
                text="A portfolio reflecting upon my learning in Information Systems and University Scholars Programme (USP)/NUS College."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MiscCard
                imgUrl="https://nususc.com/static/media/AboutUs.870c181a.jpg"
                title="House Sorter"
                subtitle="Colouring Algorithm"
                href="https://github.com/hongpeigoh/HouseSorter"
                label="Repo"
                text="A simple colouring algorithm for sorting freshmen/first-years into houses referencing data from their faculties, schools, etc."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
