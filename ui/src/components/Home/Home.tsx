import {
  Box,
  ButtonBase,
  Container,
  FormControlLabel,
  Slide,
  Typography,
} from "@mui/material";
import {
  bannerBoxStyle,
  educationBoxStyle,
  experienceBoxStyle,
  introBoxStyle,
  miscBoxStyle,
  projectsBoxStyle,
} from "../../styles/Home";
import { useState } from "react";
import {
  scrollBoxStyle,
  scrollContentStyle,
  scrollSlideStyle,
} from "../../styles/Scroll";

interface ScrollBoxProps {
  checked: boolean;
  defaultIn: boolean;
  goNext?: Function;
  goPrev?: Function;
  text: string;
}

export const ScrollBox = (props: ScrollBoxProps) => {
  const { checked, defaultIn, goNext, goPrev, text } = props;
  return (
    <Slide {...scrollSlideStyle(checked, defaultIn)}>
      <Box sx={scrollContentStyle}>
        <Typography variant="h3">Scroll box {text}</Typography>
      </Box>
    </Slide>
  );
};

export const Home = () => {
  const [index, setIndex] = useState(0);

  const goNext = () =>
    setIndex((prev) => {
      console.log(prev);
      return prev + 1;
    });

  console.log(index);

  return (
    <Container sx={scrollBoxStyle} maxWidth="sm">
      {/* <Box sx={scrollBoxStyle}>
        <FormControlLabel
          control={<ButtonBase onClick={() => goNext()} />}
          label="Show"
        />
        <ScrollBox
          checked={index === 0}
          defaultIn={index === 0}
          goNext={goNext}
          text={"1"}
        />
        <ScrollBox
          checked={index === 1}
          defaultIn={index === 0}
          goNext={goNext}
          text={"2"}
        />
        <ScrollBox
          checked={index === 2}
          defaultIn={index === 0}
          goNext={goNext}
          text={"3"}
        />
      </Box>
      <Box sx={bannerBoxStyle}>
        <Container>Hi!</Container>
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
      </Box> */}
      <Typography>Watch this space!</Typography>
    </Container>
  );
};
