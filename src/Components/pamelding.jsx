import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles(theme => ({
  root: {
    "& > span": {
      margin: theme.spacing(2)
    }
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function CustomizedBadges() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton onClick={"numberpluss"} aria-label="cart">
        <StyledBadge badgeContent={1} color="secondary">
          <PeopleIcon style={{ fontSize: 27 }} color="primary" />
        </StyledBadge>
      </IconButton>
    </div>
  );
}
