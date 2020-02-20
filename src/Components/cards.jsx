import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "./modal";
import CustomizedBadges from "./pamelding";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <img
          src={
            "https://cdn.cnn.com/cnnnext/dam/assets/181219070243-01-lion-king-1994-large-169.jpg"
          }
          alt="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hakuna Matatta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            "Hakuna-matata" (pronounced [hɑˈkunɑ mɑˈtɑtɑ]) is a Swahili language
            phrase from East Africa, meaning "no trouble" or "no problems".
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SimpleModal />
        <Button size="small" color="primary">
          Learn More
        </Button>
        <CustomizedBadges />
      </CardActions>
    </Card>
  );
}
