import { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardHeader,
  Collapse,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { educationCardStyle } from "../../styles/Home";
import styled from "@emotion/styled";
import { ExpandMoreSharp } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton size="large" color="inherit" {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

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
              <Typography
                variant="body2"
                align="justify"
                sx={{ color: "white" }}
              >
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
    <Card raised sx={educationCardStyle} variant="outlined" data-aos="fade-in">
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
            <Typography variant="h5" align="left">
              {school}
            </Typography>
          }
          subheader={
            <>
              <Typography
                variant="subtitle2"
                align="left"
                sx={{ color: "white" }}
              >
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
