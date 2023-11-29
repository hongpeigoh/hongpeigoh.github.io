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
  Paper,
  Typography,
} from "@mui/material";
import { experienceCardStyle } from "../../styles/Home";
import styled from "@emotion/styled";
import { ExpandMoreSharp } from "@mui/icons-material";
import { ExpandMore } from "./ExpandMore";

const TechIcon = styled(Paper)(() => ({
  width: 40,
  height: 40,
  padding: 5,
  backgroundColor: "#ffffff",
}));

interface DetailListProps {
  details: string[];
  tech: any[];
}

const DetailList = (props: DetailListProps) => {
  const { tech, details } = props;

  return (
    <List>
      <ListItem
        dense
        sx={{ color: "white", display: "flex", gap: "8px", flexWrap: "wrap" }}
      >
        {tech.map((brand) => (
          <TechIcon elevation={2} square={false}>
            {brand}
          </TechIcon>
        ))}
      </ListItem>
      {details.map((detail) => (
        <ListItem dense>
          <ListItemText
            primary={
              <Typography variant="body2" align="justify" color="white">
                ✦ {detail}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

interface ExperienceCardProps {
  imgUrl: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  details: string[];
  tech: any[];
}

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { imgUrl, company, role, duration, location, details, tech } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={experienceCardStyle} data-aos="fade-in">
      <CardActionArea onClick={handleExpandClick}>
        <CardHeader
          avatar={
            <Avatar
              alt={company}
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
            <Typography variant="h5" align="left" color="white">
              {company}
            </Typography>
          }
          subheader={
            <>
              <Typography variant="subtitle2" align="left" color="white">
                {role} ⬩ {duration} ⬩ {location}
              </Typography>
              <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <DetailList tech={tech} details={details} />
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
          <DetailList tech={tech} details={details} />
        </Collapse>
      </CardActionArea>
    </Card>
  );
};
