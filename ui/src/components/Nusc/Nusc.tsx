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
  Modal,
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
  slideStyle,
  textboxContainerLeftStyle,
  textboxContainerRightStyle,
  textboxLeftStyle,
  textboxRightStyle,
} from "../../styles/Nusc";

interface TextRowProps {
  text: string;
  color: string;
  size: ISize;
}

enum ISize {
  small = "small",
  medium = "medium",
  large = "large",
}

const sizeMap = {
  small: ["3.3em", "4.5em"],
  medium: ["4.3em", "5.5em"],
  large: ["5.3em", "6.5em"],
};

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
    fontSize: sizeMap[props.size][0],
  };
  const rightText = formattedText.substring(textLength);
  const rightTextboxStyle = {
    ...textboxRightStyle,
    color: props.color,
    textShadow: props.color === "white" ? "none" : "-2px 2px 2px white",
    fontSize: sizeMap[props.size][1],
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
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const [loopType, setLoopType] = useState(0);
  const [text, setText] = useState(
    "EVERYWHERE THE-LIGHT TO|UCHES IS-OUR-|KINGDOM"
  );
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("medium");

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
          <TextRow
            key={index}
            text={subtext}
            color={color}
            size={size as ISize}
          />
        ))}
      </Grid>
    </Container>
  );

  return (
    <>
      <Modal open={open}>
        <Container maxWidth="sm" sx={{ my: "35vh" }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Instructions</Typography>
            <Typography variant="body1">
              Type in your a phrase and it will show up in the NUS College
              format! Use " " to breakline, "-" to not breakline, and "|" to
              manually splice text.
            </Typography>
            <Typography variant="h6">Disclaimer</Typography>
            <Typography variant="body1">
              This tool seeks to provide an easy platform to aid NUS College
              students in creating publicity materials for NUS College
              activities. You wil bear full responsibility for all consequences
              in its subsequent use and distribution.
            </Typography>
            <Button onClick={() => setOpen(false)}>I agree</Button>
          </Paper>
        </Container>
      </Modal>
      <Box sx={containerStyle}>
        {loopType === 0 && (
          <>
            <Slide {...slideStyle(flipflop)}>
              <Box sx={imageBlob1Style}>
                <SubText />
              </Box>
            </Slide>
            <Slide {...slideStyle(!flipflop)}>
              <Box sx={imageBlob2Style}>
                <SubText />
              </Box>
            </Slide>
          </>
        )}
        {loopType === 1 && (
          <Box sx={imageBlob1Style}>
            <SubText />
          </Box>
        )}
        {loopType === 2 && (
          <Box sx={imageBlob2Style}>
            <SubText />
          </Box>
        )}
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
              <Grid item xs={12}></Grid>
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
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="font-color-label">Font Color</InputLabel>
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
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="font-size-label">Font Size</InputLabel>
                  <Select
                    id="color-select"
                    size="small"
                    value={size}
                    label="Font Size"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <MenuItem value={"small"}>Small</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"large"}>Large</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <ButtonGroup variant="outlined">
                  <Button onClick={() => setLoopType(1)}>1</Button>
                  <Button onClick={() => setLoopType(2)}>2</Button>
                  <Button onClick={() => setLoopType(0)}>LOOP</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      </Container>
    </>
  );
};
