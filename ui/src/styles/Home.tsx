import { basec, light, secon, white } from "./Colors";

export const baseBoxStyle = {
  minHeight: "30vh",
  width: "100%",
  py: 5,
  // border: "solid 1px red",
  display: "flex",
  alignItems: "start",
};

export const bannerBoxStyle = {
  ...baseBoxStyle,
  minHeight: "100vh",
  background: "center no-repeat url('/photoshoot.png')",
  backgroundSize: "900px",
  backgroundPositionY: "bottom",
  alignItems: "center",
  py: 0,
};
export const experienceBoxStyle = {
  ...baseBoxStyle,
  backgroundColor: secon,
};
export const educationBoxStyle = {
  ...baseBoxStyle,
  backgroundColor: light,
  color: basec,
};
export const projectsBoxStyle = {
  ...baseBoxStyle,
};
export const miscBoxStyle = {
  ...baseBoxStyle,
};

export const baseCardStyle = {
  background: "transparent",
  boxShadow: "none",
};
export const experienceCardStyle = {
  ...baseCardStyle,
  color: white,
};
export const educationCardStyle = {
  ...baseCardStyle,
};
export const projectCardStyle = {
  ...baseCardStyle,
  backgroundColor: white,
  borderRadius: 2,
};
export const miscCardStyle = {
  ...baseCardStyle,
  backgroundColor: white,
  borderRadius: 2,
};
