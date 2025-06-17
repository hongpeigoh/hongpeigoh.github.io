import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  Typography,
  Fade,
  Link,
  Stack,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Button,
  IconButton,
} from "@mui/material";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { basec, greyc, white } from "../../styles/Colors";
import { KeyboardArrowDown, OpenInNewOutlined } from "@mui/icons-material";

const images = [
  "/wedding1.jpg",
  "/wedding2.jpg",
  "/wedding3.jpg",
  "/wedding4.jpg",
  "/wedding5.jpg",
  "/wedding6.jpg",
  "/wedding7.jpg",
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
        minHeight: "100vh",
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
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      </Fade>
      <ScrollDownButton />
      {/* <Typography
        variant="h2"
        sx={{
          zIndex: 2,
          color: white,
          textShadow: `-1px -1px 1px ${greyc}, 3px 3px 2px ${basec}`,
          textTransform: "uppercase",
        }}
      >
        Hong Pei & Michelle's<br/>
        Wedding
      </Typography> */}
    </Box>
  );
};

const SidebarComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box
      sx={{ borderColor: "divider", borderRadius: 2, px: 2, minHeight: "80vh" }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Sidebar Tabs"
        variant="fullWidth"
      >
        <Tab label="Save the Date" />
        <Tab label="RSVP" disabled />
        <Tab label="Programmes" disabled />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && (
          <Box sx={{ textAlign: "center", mt: 4, pt: 2 }}>
            <Typography variant="h3" gutterBottom>
              Save the Date!
            </Typography>
            <Typography variant="h5" gutterBottom>
              Hong Pei & Michelle's Wedding
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Saturday, 10 January 2026 • 7:00 PM - 11:00 PM
            </Typography>

            <Typography variant="body1" sx={{ mt: 1 }} gutterBottom>
              PARKROYAL COLLECTION Marina Bay
              <br />6 Raffles Blvd, Singapore 039594
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <AddToCalendarButton
                size="3"
                name="Hong Pei & Michelle's Wedding Day"
                options={[
                  "Apple",
                  "Google",
                  "iCal",
                  "Microsoft365",
                  "Outlook.com",
                ]}
                location="PARKROYAL COLLECTION Marina Bay"
                startDate="2026-01-10"
                endDate="2026-01-10"
                startTime="19:00"
                endTime="23:00"
                timeZone="Asia/Singapore"
                buttonStyle="default"
                hideBranding
                hideBackground
                iCalFileName="Hong-Pei-and-Michelle-s-Wedding"
              />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  boxShadow: `1px 1px 1px ${greyc}`,
                }}
                href="https://maps.app.goo.gl/ZdfekEfjmUzw3wrh9"
                target="_blank"
                rel="noopener"
                endIcon={<OpenInNewOutlined />}
              >
                <b>Google Maps</b>
              </Button>
            </Stack>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8042959939135!2d103.8545434756791!3d1.291797561758234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a789de28768b%3A0xf44170676b474694!2sPARKROYAL%20COLLECTION%20Marina%20Bay!5e0!3m2!1sen!2ssg!4v1749999556696!5m2!1sen!2ssg"
              style={{
                width: "75%",
                height: "400px",
                border: "none",
                borderRadius: "15px",
              }}
              loading="lazy"
            />
          </Box>
        )}
        {tabIndex === 1 && (
          <Typography variant="h6">Watch this space!</Typography>
        )}
        {tabIndex === 2 && (
          <Typography variant="h6">Watch this space!</Typography>
        )}
      </Box>
    </Box>
  );
};

export const WeddingHome = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          p: 0,
          width: "100%",
          backgroundColor: white,
          color: basec,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <Slideshow />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SidebarComponent />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
