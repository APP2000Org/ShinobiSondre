import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export default function BrukerInfo() {
  return (
    <div>
      <Avatar
        alt="Naruto"
        src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/01/Naruto.jpg"
        className={useStyles.large}
      />
    </div>
  );
}
