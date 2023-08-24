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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  containerStyle,
  descriptionStyle,
  imageBlob1Style,
  imageBlob2Style,
  imageBlobStyle,
  slideStyle,
  textboxContainerLeftStyle,
  textboxContainerRightStyle,
  textboxLeftStyle,
  textboxRightStyle,
} from "../../styles/Nusc";

enum ISize {
  small = "small",
  medium = "medium",
  large = "large",
}

const sizeMap = {
  small: ["3.6em", "4.5em"],
  medium: ["4.4em", "5.5em"],
  large: ["5.2em", "6.5em"],
};

interface BreakawayProps {
  text: string;
  color: string;
  size: ISize;
}

const getTitleChunks = (text: string) => {
  const leftChunks = [];
  const rightChunks = [];
  for (const line of text.split(" ")) {
    const textLength =
      line.indexOf("|") !== -1 ? line.indexOf("|") : Math.ceil(line.length / 2);
    const formattedText = line.replaceAll("|", "").replaceAll("-", " ");
    leftChunks.push(formattedText.substring(0, textLength));
    rightChunks.push(formattedText.substring(textLength));
  }
  return [leftChunks, rightChunks];
};

const Breakaway = (props: BreakawayProps) => {
  const [leftChunks, rightChunks] = getTitleChunks(props.text);
  const leftTextboxStyle = {
    ...textboxLeftStyle,
    color: props.color,
    textShadow: props.color === "white" ? "none" : "2px 2px 2px #ffffffaa",
    fontSize: sizeMap[props.size][0],
  };
  const rightTextboxStyle = {
    ...textboxRightStyle,
    color: props.color,
    textShadow: props.color === "white" ? "none" : "2px 2px 2px #ffffffaa",
    fontSize: sizeMap[props.size][1],
  };
  return (
    <Grid container>
      <Grid item xs={6} sx={textboxContainerLeftStyle}>
        <Stack>
          {leftChunks.map((subtext, index) => (
            <Typography key={index} sx={leftTextboxStyle} variant="body1">
              {subtext}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={6} sx={textboxContainerRightStyle}>
        <Stack>
          {rightChunks.map((subtext, index) => (
            <Typography key={index} sx={rightTextboxStyle} variant="body1">
              {subtext}
            </Typography>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export const Nusc = () => {
  const [flipflop, setFlipflop] = useState(true);
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const [loopType, setLoopType] = useState<string | number>(0);
  const [text, setText] = useState("BREAK OPEN THE CLASSROOM");
  const [color, setColor] = useState("#ef7c00");
  const [size, setSize] = useState("small");

  const handleChange = (event: any) => {
    setText(event.target.value.replaceAll("\n", " ").toUpperCase());
  };

  useEffect(() => {
    let isMounted = true;
    if (loopType !== 0) return;
    const timer = setInterval(() => {
      isMounted && setFlipflop((old) => !old);
    }, 5000);
    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [loopType]);

  const SubText = () => (
    <Container maxWidth="sm">
      <Breakaway text={text} color={color} size={size as ISize} />
    </Container>
  );

  return (
    <>
      <Modal open={open}>
        <Container disableGutters maxWidth="sm" sx={{ my: "35vh" }}>
          <Paper sx={{ p: 3, mx: 0 }}>
            <Typography variant="h6">Instructions</Typography>
            <Typography variant="body1">
              Type in a phrase and it will show up in the NUS College's
              Break-away format! Use " " to start a new line, "-" to keep words
              on the same line, and "|" to choose the splitting point.
            </Typography>
            <Typography variant="h6">Disclaimer</Typography>
            <Typography variant="body1">
              This tool acts as visualiser and any material used thereafter
              shall have its responsibility borne by the creator.
            </Typography>
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              I agree
            </Button>
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
        {typeof loopType === "string" && (
          <Box sx={imageBlobStyle(loopType)}>
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
                    <MenuItem value={"#ffffff"}>White</MenuItem>
                    <MenuItem value={"#ef7c00"}>NUS Orange</MenuItem>
                    <MenuItem value={"#ff3c0d"}>Cinnamon (Bright)</MenuItem>
                    <MenuItem value={"#fcedd6"}>Cinnamon (Light)</MenuItem>
                    <MenuItem value={"#f3e207"}>Highlight Yellow</MenuItem>
                    <MenuItem value={"#003d7c"}>NUS Blue</MenuItem>
                    <MenuItem value={"#000099"}>Blue (Bright)</MenuItem>
                    <MenuItem value={"#c8e9e0"}>Blue (Light)</MenuItem>
                    <MenuItem value={"#72e2fc"}>Blue</MenuItem>
                    <MenuItem value={"#d0cfc7"}>Paper-Grey</MenuItem>
                    <MenuItem value={"#000000"}>Black</MenuItem>
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
                <FormControl fullWidth>
                  <InputLabel id="bg-color-label">Background Color</InputLabel>
                  <Select
                    id="bg-color-select"
                    size="small"
                    value={loopType}
                    label="Background Color"
                    onChange={(e) => setLoopType(e.target.value)}
                  >
                    <MenuItem value={0}>Photo Loop</MenuItem>
                    <MenuItem value={1}>Photo 1</MenuItem>
                    <MenuItem value={2}>Photo 2</MenuItem>
                    <MenuItem value={"#ffffff"}>White</MenuItem>
                    <MenuItem value={"#ef7c00"}>NUS Orange</MenuItem>
                    <MenuItem value={"#ff3c0d"}>Cinnamon (Bright)</MenuItem>
                    <MenuItem value={"#fcedd6"}>Cinnamon (Light)</MenuItem>
                    <MenuItem value={"#f3e207"}>Highlight Yellow</MenuItem>
                    <MenuItem value={"#003d7c"}>NUS Blue</MenuItem>
                    <MenuItem value={"#000099"}>Blue (Bright)</MenuItem>
                    <MenuItem value={"#c8e9e0"}>Blue (Light)</MenuItem>
                    <MenuItem value={"#72e2fc"}>Blue</MenuItem>
                    <MenuItem value={"#d0cfc7"}>Paper-Grey</MenuItem>
                    <MenuItem value={"#000000"}>Black</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      </Container>
    </>
  );
};
