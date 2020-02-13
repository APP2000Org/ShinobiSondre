import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { onMouseOver } from "./toolbox";
import { onMouseOut } from "./toolbox";
import BasicTextFields from "./toolbox";
import Button from "@material-ui/core/Button";
import Popup from "reactjs-popup";
import TextFields from "./nybruker";

//Lagd av Sondre Reiholdtsen StudNr: 225274

//getModalStyle er en funksjon som sørger for at alt inni taggen Modal blir opprettet i midten av skjermen
//getModalStyle is not a pure function, we roll the style only on the first render

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

//Stil innstillinger til <Modal>
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 280,
    backgroundColor: "White",
    borderRadius: "25px",
    boxShadow: theme.shadows[5],
    marginRight: "50%",
    padding: theme.spacing(2, 4, 3)
  }
}));

//Stil innstillinger til

const login = {
  fontSize: "20px",
  textDecoration: "underline"
};

/*Funksjonen SimpleModal vil rendre alt innhold i diven og Modal taggen 
 når man trykker på en spesifik tekst (Login) som vil lyse blå onMouseHover
*/
export default function SimpleModal() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  //Sørger for å ikke vise innholdet i diven inntil useState blir true
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p
        style={login}
        onClick={handleOpen} //Sørger for at React.useState blir true
        onMouseEnter={onMouseOver} //Highlighter teksten blå
        onMouseLeave={onMouseOut} //Endrer tekstfargen tilbake til det den orginalt var
      >
        Login
      </p>
      <Modal
        aria-labelledby="simple-modal-title" //Font
        aria-describedby="simple-modal-description" //Font
        open={open} //Returner true når modal blir åpnet og kombinert med at setopen er true vil innholdet vises
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>{BasicTextFields()}</form>
          <br />
          <div className="Buttons">
            <Button onClick={handleClose} color="primary">
              Login
            </Button>
            <Popup
              modal
              trigger={
                <Button onClick={handleClose} color="primary">
                  Ny Bruker
                </Button>
              }
            >
              <div style={modalStyle} className={classes.paper}>
                <form>{TextFields()}</form>
                <br />
                <Button onClick={handleClose} color="primary">
                  Bekreft bruker!
                </Button>
              </div>
            </Popup>
          </div>
        </div>
      </Modal>
    </div>
  );
}
