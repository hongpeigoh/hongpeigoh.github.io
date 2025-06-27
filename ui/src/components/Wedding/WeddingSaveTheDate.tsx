import { OpenInNewOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { greyc } from "../../styles/Colors";

export const WeddingSaveTheDate = () => (
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
      sx={{ my: 2 }}
    >
      <AddToCalendarButton
        size="3"
        name="Hong Pei & Michelle's Wedding Day"
        options={["iCal", "Google", "Microsoft365", "Outlook.com"]}
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
      title="map"
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
);
