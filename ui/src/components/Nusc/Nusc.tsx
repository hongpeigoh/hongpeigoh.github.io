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
  textboxContainerLeftStyle,
  textboxContainerRightStyle,
  textboxLeftStyle,
  textboxRightStyle,
} from "../../styles/Nusc";

interface TextRowProps {
  text: string;
}

const TextRow = (props: TextRowProps) => {
  const textLength =
    props.text.indexOf("|") !== -1
      ? props.text.indexOf("|")
      : Math.ceil(props.text.length / 2);
  const leftText = props.text.replaceAll("|", "").substring(0, textLength);
  const rightText = props.text.replaceAll("|", "").substring(textLength);
  return (
    <>
      <Grid item xs={6} sx={textboxContainerLeftStyle}>
        <Typography sx={textboxLeftStyle} variant="h2">
          {leftText}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={textboxContainerRightStyle}>
        <Typography sx={textboxRightStyle} variant="h2">
          {rightText}
        </Typography>
      </Grid>
    </>
  );
};

export const Nusc = () => {
  const [flipflop, setFlipflop] = useState(true);
  const [ready, setReady] = useState(true);
  const [text, setText] = useState("BREAK OPEN THE CLASSROOM");

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
      <Grid container>
        {text.split(" ").map((subtext, index) => (
          <TextRow key={index} text={subtext} />
        ))}
      </Grid>
    </Container>
  );

  return (
    <>
      <Box sx={containerStyle}>
        <Grow in={ready} exit={false}>
          <div>
            <Slide
              direction={flipflop ? "left" : "right"}
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
            <Slide
              direction={!flipflop ? "left" : "right"}
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
          </div>
        </Grow>
      </Box>
      <Container maxWidth="sm" sx={{ zIndex: 10 }}>
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