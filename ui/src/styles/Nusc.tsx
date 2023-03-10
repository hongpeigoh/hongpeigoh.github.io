export const containerStyle = {
  marginTop: "-48px",
  height: "90vh",
  minWidth: "100vw",
  overflow: "hidden",
  position: "relative",
};

export const imageBlob1Style = {
  position: "absolute",
  top: "0%",
  display: "flex",
  alignItems: "center",
  minHeight: "90vh",
  minWidth: "100vw",
  backgroundImage:
    'url("https://nuscollege.nus.edu.sg/wp-content/uploads/2023/03/home-hero-1.jpg")',
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingBottom: "7vh",
};
export const imageBlob2Style = {
  position: "absolute",
  top: "0%",
  display: "flex",
  alignItems: "center",
  minHeight: "90vh",
  minWidth: "100vw",
  backgroundImage:
    'url("https://nuscollege.nus.edu.sg/wp-content/uploads/2023/02/home-hero-2.jpg")',
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingBottom: "7vh",
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
  fontWeight: "bold",
  lineHeight: "0.9",
  textAlign: "right",
};

export const textboxRightStyle = {
  margin: "0px",
  fontFamily: '"Blender Pro", Sans-serif',
  fontWeight: "bold",
  lineHeight: "0.9",
  textAlign: "left",
};

export const descriptionStyle = {
  my: "-230px",
  flexDirection: "column",
  padding: "18px",
};

export const slideStyle = (toggle: boolean) => ({
  direction: toggle ? "left" : "right" as "left" | "right",
  in: toggle,
  timeout: { enter: 700, exit: 700 },
  mountOnEnter: true,
  easing: {
    enter: "linear",
    exit: "linear",
  },
});
