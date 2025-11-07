import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { greyc } from "../../styles/Colors";
import { projectCardStyle } from "../../styles/Home";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  subtitle?: string;
  date?: string;
  href: string;
  label: string;
  text: string;
  tech: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { imgUrl, title, subtitle, date, href, label, text, tech } = props;
  return (
    <Card sx={projectCardStyle} data-aos="fade-in">
      <CardMedia sx={{ height: 260 }} image={imgUrl} title={title} />
      <CardContent sx={{ px: 3 }}>
        <Typography gutterBottom={!subtitle} variant="h5" align="left">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" component="div" align="left">
            {subtitle}
          </Typography>
        )}
        {date && (
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            align="left"
            color={greyc}
          >
            {date}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" align="justify">
          {text}
        </Typography>
        <Typography
          sx={{
            color: "white",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            pt: 2,
          }}
        >
          {tech.map((brand) => (
            <>{brand}</>
          ))}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 3 }}>
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
