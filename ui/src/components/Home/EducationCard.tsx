import { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { educationCardStyle } from "../../styles/Home";
import { ExpandMoreSharp } from "@mui/icons-material";
import { ExpandMore } from "./ExpandMore";
import { basec } from "../../styles/Colors";

interface DetailListProps {
  details: string[];
}

const DetailList = (props: DetailListProps) => {
  const { details } = props;

  return (
    <List>
      {details.map((detail) => (
        <ListItem dense>
          <ListItemText
            primary={
              <Typography variant="body2" align="justify" color={basec}>
                ✦ {detail}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

interface EducationCardProps {
  imgUrl: string;
  school: string;
  location: string;
  duration: string;
  details: string[];
}

export const EducationCard = (props: EducationCardProps) => {
  const { imgUrl, school, duration, location, details } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={educationCardStyle} data-aos="fade-in">
      <CardActionArea onClick={handleExpandClick}>
        <CardHeader
          avatar={
            <Avatar
              alt={school}
              sx={{
                height: 80,
                width: 80,
                backgroundImage: `url('${imgUrl}')`,
                backgroundColor: "white",
                backgroundSize: 80,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
              }}
            >
              {" "}
            </Avatar>
          }
          action={
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreSharp />
            </ExpandMore>
          }
          title={
            <Typography variant="h5" align="left" color={basec}>
              {school}
            </Typography>
          }
          subheader={
            <>
              <Typography variant="subtitle2" align="left" color={basec}>
                {duration} ⬩ {location}
              </Typography>
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <DetailList details={details} />
              </Collapse>
            </>
          }
        />
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <DetailList details={details} />
        </Collapse>
      </CardActionArea>
    </Card>
  );
};
