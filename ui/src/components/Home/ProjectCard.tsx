import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { projectCardStyle } from "../../styles/Home";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  href: string;
  label: string;
  text: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { imgUrl, title, href, label, text } = props;
  return (
    <Card sx={projectCardStyle} data-aos="fade-in">
      <CardMedia sx={{ height: 260 }} image={imgUrl} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" align="left">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
          variant="contained"
        >
          {label}
        </Button>
      </CardActions>
    </Card>
  );
};
