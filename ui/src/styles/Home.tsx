export const baseBoxStyle = {
  minHeight: "60vh",
  width: "100%",
  py: 0,
  border: "solid 1px red",
  display: "flex",
  alignItems: "center",
};

export const bannerBoxStyle = {
  ...baseBoxStyle,
  minHeight: "100vh",
  background: "center no-repeat url('/photoshoot.png')",
  backgroundSize: "900px",
  backgroundPositionY: "bottom",
};
export const experienceBoxStyle = {
  ...baseBoxStyle,
  py: 5,
};
export const educationBoxStyle = {
  ...baseBoxStyle,
  py: 5,
};
export const projectsBoxStyle = {
  ...baseBoxStyle,
};
export const miscBoxStyle = {
  ...baseBoxStyle,
};

export const baseCardStyle = {
  background: "#0F131B",
  color: "#ffffff",
};
export const experienceCardStyle = {
  ...baseCardStyle,
};
export const educationCardStyle = {
  ...baseCardStyle,
};
