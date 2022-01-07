import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "./styles";

export default function Article({ data }) {
  const classes = useStyles();

  if (Object.keys(data).length === 0) {
    return null;
  }

  const { title, description: desc, url, urlToImage } = data;

  const media = urlToImage ? (
    <CardMedia
      component="img"
      alt="image-news"
      height="140"
      image={urlToImage}
    />
  ) : (
    <Skeleton animation={"wave"} height={140} />
  );

  const description = desc || <Skeleton animation={"wave"} height={50} />;

  return (
    <Card className={classes.card} sx={{ maxWidth: 345 }}>
      {media}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={url} target="_blank" size="small">
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
