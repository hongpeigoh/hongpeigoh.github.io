import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { mrtbg } from "../../styles/Colors";
import { mrtImageBoxStyle } from "../../styles/Mrt";
import { ZoomSlider } from "./ZoomSlider";
import { LeftPanel } from "./LeftPanel";
import { getSplitStations } from "./logic";

export const Mrt = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [zoom, setZoom] = useState<number>(1.2);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const minZoom = 1;
  const maxZoom = 2;
  const stepZoom = 0.05;

  // Handle drawer toggle
  const toggleDrawer = (): void => {
    setOpen(!open);
  };

  const handleZoomChange = (
    event: Event,
    newValue: number | number[]
  ): void => {
    setZoom(newValue as number);
  };

  const handleWheel = (event: WheelEvent): void => {
    if (event.deltaY < 0) {
      setZoom((prevZoom) => Math.min(prevZoom + stepZoom, maxZoom));
    } else {
      setZoom((prevZoom) => Math.max(prevZoom - stepZoom, minZoom));
    }
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        console.log(e.clientX - offset.x);
        console.log(e.clientY - offset.y);
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    },
    [isDragging, offset]
  );

  // Handle the mouse up event
  const handleMouseUp = useCallback(() => {
      console.log(position.y);
      setIsDragging(false);
  }, []);

  useEffect(() => {
    document.getElementById("movable")?.addEventListener("wheel", handleWheel);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.style.overflow = "hidden"
    return () => {
      document.getElementById("movable")?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.overflow = "auto"
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Box
      id="movable"
      sx={{
        display: "flex",
        bgcolor: mrtbg,
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <LeftPanel open={open} />
      <Box>
        <Box
          onMouseDown={handleMouseDown}
          sx={mrtImageBoxStyle(zoom, position, isDragging)}
        />
      </Box>
      <ZoomSlider
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        stepZoom={stepZoom}
        handleZoomChange={handleZoomChange}
      />
    </Box>
  );
};
