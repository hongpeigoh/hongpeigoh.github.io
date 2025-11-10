export const scrollBoxStyle = () => ({
  height: "100%",
  overflowY: "hidden",
});

export const scrollSlideStyle = (toggle: boolean, defaultIn: boolean) => ({
  direction: (toggle ? "up" : "down") as "up" | "down",
  appear: !defaultIn,
  in: toggle,
  timeout: { enter: 300, exit: 300 },
  mountOnEnter: true,
  dismountOnExit: true,
  easing: {
    enter: "linear",
    exit: "linear",
  },
  width: "auto",
});
export const scrollContentStyle = () => ({
  height: "100vh",
  width: "100%",
  border: "solid 12px red",
  backgroundColor: "yellow",
  position: "fixed",
  top: "0",
});
