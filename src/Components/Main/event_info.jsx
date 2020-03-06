import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import TextFields from "./nybruker";
import MediaCard from "./cards";

//Lagd av Sondre Reiholdtsen StudNr: 225274
const top = 50;
const left = 50;

const useStyles = {
  position: "absolute",
  width: 280,
  backgroundColor: "White",
  borderRadius: "25px",
  boxShadow: [5],
  marginRight: "50%",
  padding: (2, 4, 3),
  top: `${top}%`,
  left: `${left}%`,
  transform: `translate(-${top}%, -${left}%)`
};

export default function brukerinfo() {
  const classes = useStyles;

  return (
    <div>
      <Popup modal trigger={<Button color="primary">Ny Bruker</Button>}>
        <div style={classes} className={classes.paper}>
          <form>{MediaCard()}</form>
          <br />
          <Button color="primary">Bekreft bruker!</Button>
        </div>
      </Popup>
    </div>
  );
}
