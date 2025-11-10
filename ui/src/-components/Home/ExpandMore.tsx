import styled from "@emotion/styled";
import { IconButton, type IconButtonProps } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export const ExpandMore = styled(({ expand, ...other }: ExpandMoreProps) => {
  return <IconButton size="large" color="inherit" {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));
