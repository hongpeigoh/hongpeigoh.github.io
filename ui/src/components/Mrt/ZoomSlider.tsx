import { Box, Slider, Typography } from "@mui/material";
import { basec } from "../../styles/Colors";

export const ZoomSlider = (props: {
    zoom: number;
    minZoom: number;
    maxZoom: number;
    stepZoom: number;
    handleZoomChange: (event: Event, newValue: number | number[]) => void;
  }) => {
    const { zoom, minZoom, maxZoom, stepZoom, handleZoomChange } = props;
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: 300,
          zIndex: 1000,
        }}
      >
        <Typography variant="body1" color={basec} sx={{ mb: 1 }}>
          Zoom
        </Typography>
        <Slider
          value={zoom}
          min={minZoom}
          max={maxZoom}
          step={stepZoom}
          onChange={handleZoomChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${Math.round(value * 100)}%`}
          sx={{
            color: basec,
          }}
        />
      </Box>
    );
  };