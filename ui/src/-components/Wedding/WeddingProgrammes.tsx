import { OpenInNewOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { greyc } from "../../-styles/Colors";

interface ScheduleItem {
  time: string;
  season?: string;
  description: string;
}

const scheduleData: ScheduleItem[] = [
  { time: "19:00", season: "Summer", description: "Cocktail Reception" },
  { time: "19:20", description: "Doors open" },
  { time: "19:40", description: "Opening*" },
  {
    time: "20:00",
    season: "Autumn",
    description: "1st March-in and Cake Cutting",
  },
  { time: "20:15", description: "Dinner*" },
  { time: "21:00", season: "Winter", description: "2nd March-in and Toasts" },
  {
    time: "21:30",
    season: "Spring",
    description: "Table-to-table Photo-taking*",
  },
  { time: "22:30", description: "End" },
];

export const WeddingProgrammes = () => (
  <Box sx={{ textAlign: "center", mt: 4, pt: 2 }}>
    <Typography variant="h4" gutterBottom>
      Programmes
    </Typography>
    <Typography variant="body1" sx={{ mt: 1 }}>
      Saturday, 10 January 2026 • 7:00 PM - 11:00 PM
    </Typography>

    <Typography variant="body1" sx={{ mt: 1 }} gutterBottom>
      Atrium Ballroom • Level 5
      <br />
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
    <TableContainer sx={{ maxWidth: 600, margin: "auto" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Season</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduleData.map((item) => (
            <TableRow key={item.time}>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.season || ""}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant="body2" marginTop="10px" textAlign="start">
      *with games and performances!
    </Typography>
  </Box>
);
