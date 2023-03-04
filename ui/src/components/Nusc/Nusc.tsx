import { useEffect, useState } from "react";

import {
  Box,
  Container,
  Grid,
  Grow,
  Paper,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  containerStyle,
  descriptionStyle,
  imageBlob1Style,
  imageBlob2Style,
  textboxContainerStyle,
  textboxStyle,
} from "../../styles/Nusc";

interface TextRowProps {
  text: string;
}

const TextRow = (props: TextRowProps) => {
  const textLength = Math.floor(props.text.length / 2);
  const leftText = props.text.substring(0, textLength);
  const rightText = props.text.substring(textLength);
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{ justifyContent: "right", ...textboxContainerStyle }}
      >
        <Typography
          sx={{ textAlign: "right", fontSize: "72px", ...textboxStyle }}
          variant="h1"
        >
          {leftText}
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ justifyContent: "left", ...textboxContainerStyle }}
      >
        <Typography sx={{ textAlign: "left", ...textboxStyle }} variant="h1">
          {rightText}
        </Typography>
      </Grid>
    </>
  );
};

export const Nusc = () => {
  const [flipflop, setFlipflop] = useState(true);
  const [ready, setReady] = useState(true);
  const [text, setText] = useState("WELCOME TO NUS COLLEGE");

  const handleChange = (event: any) => {
    setReady(false);
    setText(event.target.value.replaceAll("\n", " ").toUpperCase());
    setTimeout(() => setReady(true), 100);
  };

  useEffect(() => {
    let isMounted = true;
    const timer = setInterval(() => {
      isMounted && setFlipflop((old) => !old);
    }, 5000);
    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  const SubText = () => (
    <Container maxWidth="sm">
      <Grow in={ready} exit={false}>
        <Grid container spacing={0}>
          {text.split(" ").map((subtext, index) => (
            <TextRow key={index} text={subtext} />
          ))}
        </Grid>
      </Grow>
    </Container>
  );

  return (
    <>
      <Box sx={containerStyle}>
        <Slide
          direction="right"
          in={flipflop}
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          easing={{
            enter: "linear",
            exit: "linear",
          }}
        >
          <Slide
            direction="left"
            in={flipflop}
            timeout={{ enter: 700, exit: 700 }}
            mountOnEnter
            easing={{
              enter: "linear",
              exit: "linear",
            }}
          >
            <Box sx={imageBlob1Style}>
              <SubText />
            </Box>
          </Slide>
        </Slide>
        <Slide
          direction="right"
          in={!flipflop}
          timeout={{ enter: 700, exit: 700 }}
          unmountOnExit
          easing={{
            enter: "linear",
            exit: "linear",
          }}
        >
          <Slide
            direction="left"
            in={!flipflop}
            timeout={{ enter: 700, exit: 700 }}
            mountOnEnter
            easing={{
              enter: "linear",
              exit: "linear",
            }}
          >
            <Box sx={imageBlob2Style}>
              <SubText />
            </Box>
          </Slide>
        </Slide>
      </Box>
      <Container maxWidth="sm">
        <Paper elevation={12} sx={descriptionStyle}>
          <Stack spacing={4}>
            <Typography variant="body1">
              Type in your a phrase and it will show up in the NUS College
              format!
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter here"
              multiline
              rows={1}
              value={text}
              onChange={handleChange}
              fullWidth
            />
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
