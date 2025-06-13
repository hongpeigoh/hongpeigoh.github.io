import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Line, getSplitStations } from "./logic";

// Credits for MRT data: https://github.com/cheeaun/sgraildata/blob/master/data/raw/wikipedia-mrt.json
const lines: Line[] = getSplitStations();

export const LeftPanel = (props: { open: boolean }) => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
        cursor: "default",
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <List>
        {lines.map((line) => (
          <List>
            {line.name}
            {line.stations.map((station) => (
              <ListItem>
                <ListItemText primary={station.title} />
              </ListItem>
            ))}
          </List>
        ))}
      </List>
    </Drawer>
  );
};
