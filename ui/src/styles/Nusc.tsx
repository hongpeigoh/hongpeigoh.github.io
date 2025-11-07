export const containerStyle = {
  height: "100vh",
  minWidth: "100vw",
  overflow: "hidden",
  position: "relative",
};

export const imageBlobStyle = (color: string) => ({
  position: "absolute",
  top: "0%",
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundColor: color,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
export const imageBlob1Style = {
  ...imageBlobStyle("white"),
  backgroundImage:
    'url("https://nuscollege.nus.edu.sg/wp-content/uploads/2023/03/home-hero-1.jpg")',
};
export const imageBlob2Style = {
  ...imageBlobStyle("white"),
  backgroundImage:
    'url("https://nuscollege.nus.edu.sg/wp-content/uploads/2023/02/home-hero-2.jpg")',
};

export const textboxContainerLeftStyle = {
  display: "flex",
  alignItems: "center",
  px: "2px",
  justifyContent: "right",
};
export const textboxContainerRightStyle = {
  display: "flex",
  alignItems: "center",
  px: "2px",
  justifyContent: "left",
};

export const textboxLeftStyle = {
  margin: "0px",
  fontFamily: '"Blender Pro", Sans-serif',
  lineHeight: "0.75",
  textAlign: "right",
};

export const textboxRightStyle = {
  margin: "0px",
  fontFamily: '"Blender Pro", Sans-serif',
  lineHeight: "0.75",
  textAlign: "left",
};

export const descriptionStyle = {
  flexDirection: "column",
  padding: "18px",
};

export const slideStyle = (toggle: boolean) => ({
  direction: toggle ? "left" : ("right" as "left" | "right"),
  in: toggle,
  timeout: { enter: 700, exit: 700 },
  mountOnEnter: true,
  easing: {
    enter: "linear",
    exit: "linear",
  },
});
