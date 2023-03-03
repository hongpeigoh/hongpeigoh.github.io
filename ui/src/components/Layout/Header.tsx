import { Link, useLocation } from "react-router-dom";

import { Box, Tab, Tabs } from "@mui/material";

export const Header = () => {
  const location = useLocation();

  return (
    <Box>
      <Tabs
        value={location.pathname}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        <Tab label="Home" value="/" to="/" component={Link} />
        <Tab label="About" value="/about" to="/about" component={Link} />
        <Tab
          label="NUSC"
          value="/widgets/nusc"
          to="/widgets/nusc"
          component={Link}
        />
      </Tabs>
    </Box>
  );
};
