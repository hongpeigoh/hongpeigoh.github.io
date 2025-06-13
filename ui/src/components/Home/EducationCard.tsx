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
        <ListItem dense style={{ paddingBottom: 0 }}>
          <ListItemText
            primary={
              <Typography variant="body2" align="justify" color={basec}>
                • {detail}
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
  degree: string;
  duration: string;
  location: string;
  grade: string;
  details?: string[];
}

export const EducationCard = (props: EducationCardProps) => {
  const { imgUrl, school, degree, duration, location, grade, details } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={educationCardStyle} data-aos="fade-in">
      <CardActionArea onClick={details && handleExpandClick}>
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
            details && (
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreSharp />
              </ExpandMore>
            )
          }
          title={
            <Typography variant="h5" align="left" color={basec}>
              {school}
            </Typography>
          }
          subheader={
            <>
              <Typography variant="subtitle2" align="left" color={basec}>
                {degree}
              </Typography>
              <Typography variant="caption" component="div" align="left" color={basec}>
                {duration} ⬩ {location} ⬩ {grade}
              </Typography>
              {details && (
                <Collapse
                  in={expanded}
                  timeout="auto"
                  unmountOnExit
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <DetailList details={details} />
                </Collapse>
              )}
            </>
          }
        />
        {details && (
          <Collapse
            in={expanded}
            timeout="auto"
            unmountOnExit
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <DetailList details={details} />
          </Collapse>
        )}
      </CardActionArea>
    </Card>
  );
};
