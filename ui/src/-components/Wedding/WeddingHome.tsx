import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  createTheme,
  Fade,
  Grid,
  IconButton,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import type React from "react";
import { useEffect, useState } from "react";
import { greyc, white } from "../../-styles/Colors";
import {
  weddingContainer,
  weddingRightPanel,
  weddingSlideshow,
} from "../../-styles/Wedding";
import { WeddingRsvp } from "./WeddingRsvp";
import { WeddingSaveTheDate } from "./WeddingSaveTheDate";

const images = [
  "/wedding7.jpg",
  "/wedding2.jpg",
  "/wedding3.jpg",
  "/wedding5.jpg",
  "/wedding4.jpg",
  "/wedding1.jpg",
  "/wedding6.jpg",
];

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

const ScrollDownButton = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={handleScroll}
      sx={{
        position: "absolute",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        backgroundColor: white,
        "&:hover": {
          backgroundColor: greyc,
        },
        display: {
          xs: "flex",
          sm: "flex",
          md: "none",
        },
      }}
    >
      <KeyboardArrowDown fontSize="large" />
    </IconButton>
  );
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out current
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true); // Fade in next image
      }, 500); // Match the fade-out duration
      setTimeout(() => {
        setPrevIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        minHeight: "100svh",
        backgroundColor: "#ccc",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={images[prevIndex]}
        alt={`Slide ${prevIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Fade in={fadeIn} timeout={500}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          sx={weddingSlideshow}
        />
      </Fade>
      <ScrollDownButton />
    </Box>
  );
};

const SidebarComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={weddingRightPanel}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Sidebar Tabs"
        variant="fullWidth"
      >
        <Tab label="Save the Date" />
        <Tab label="RSVP" />
        {/* <Tab label="Programmes" disabled /> */}
      </Tabs>

      {tabIndex === 0 && <WeddingSaveTheDate />}
      {tabIndex === 1 && <WeddingRsvp />}
      {tabIndex === 2 && (
        <Typography variant="h6">Watch this space!</Typography>
      )}
    </Box>
  );
};

export const WeddingHome = () => {
  useEffect(() => {
    document.title = "Hong Pei and Michelle's Wedding";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={weddingContainer}>
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Slideshow />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} flexDirection={"column"}>
            <SidebarComponent />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
