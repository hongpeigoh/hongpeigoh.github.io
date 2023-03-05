import { useEffect, useState } from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  Grow,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
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
  color: string;
}

const TextRow = (props: TextRowProps) => {
  const textLength =
    props.text.indexOf("|") !== -1
      ? props.text.indexOf("|")
      : Math.ceil(props.text.length / 2);
  const formattedText = props.text.replaceAll("|", "").replaceAll("-", " ");
  const leftText = formattedText.substring(0, textLength);
  const leftTextboxStyle = {
    ...textboxLeftStyle,
    color: props.color,
    textShadow: props.color === "white" ? "none" : "-2px 2px 2px white",
  };
  const rightText = formattedText.substring(textLength);
  const rightTextboxStyle = {
    ...textboxRightStyle,
    color: props.color,
    textShadow: props.color === "white" ? "none" : "-2px 2px 2px white",
  };
  return (
    <>
      <Grid item xs={6} sx={textboxContainerLeftStyle}>
        <Typography sx={leftTextboxStyle} variant="h2">
          {leftText}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={textboxContainerRightStyle}>
        <Typography sx={rightTextboxStyle} variant="h2">
          {rightText}
        </Typography>
      </Grid>
    </>
  );
};

export const Nusc = () => {
  const [flipflop, setFlipflop] = useState(true);
  const [show, setShow] = useState(true);
  const [text, setText] = useState(
    "EVERYWHERE THE-LIGHT TO|UCHES IS-OUR-|KINGDOM"
  );
  const [color, setColor] = useState("white");

  const handleChange = (event: any) => {
    setText(event.target.value.replaceAll("\n", " ").toUpperCase());
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
          <TextRow key={index} text={subtext} color={color} />
        ))}
      </Grid>
    </Container>
  );

  return (
    <>
      <Box sx={containerStyle}>
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
      </Box>
      <Container maxWidth="sm" sx={{ zIndex: 10 }}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setShow((old) => !old)}
        >
          {show ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
        <Grow in={show}>
          <Paper elevation={12} sx={descriptionStyle}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Type in your a phrase and it will show up in the NUS College
                  format!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Enter here"
                  multiline
                  size="small"
                  rows={1}
                  value={text}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Font Color
                  </InputLabel>
                  <Select
                    id="color-select"
                    size="small"
                    value={color}
                    label="Font Color"
                    onChange={(e) => setColor(e.target.value)}
                  >
                    <MenuItem value={"white"}>White</MenuItem>
                    <MenuItem value={"#ef7c00"}>Orange</MenuItem>
                    <MenuItem value={"#003d7c"}>Blue</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <ButtonGroup variant="outlined" color="secondary">
                  <Button disabled>Save as JPG</Button>
                  <Button disabled>Save as PNG</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      </Container>
    </>
  );
};
