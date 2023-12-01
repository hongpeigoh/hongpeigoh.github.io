import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { miscCardStyle } from "../../styles/Home";

interface MiscCardProps {
  imgUrl: string;
  title: string;
  subtitle?: string;
  href: string;
  label: string;
  text: string;
}

export const MiscCard = (props: MiscCardProps) => {
  const { imgUrl, title, subtitle, href, label, text } = props;
  return (
    <Card sx={miscCardStyle} data-aos="fade-in">
      <CardMedia sx={{ height: 260 }} image={imgUrl} title={title} />
      <CardContent sx={{ px: 3 }}>
        <Typography gutterBottom={!subtitle} variant="h5" align="left">
          {title}
        </Typography>
        {subtitle && (
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            align="left"
          >
            {subtitle}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" align="justify">
          {text}
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
