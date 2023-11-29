import styled from "@emotion/styled";
import { IconButton, IconButtonProps } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton size="large" color="inherit" {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));
