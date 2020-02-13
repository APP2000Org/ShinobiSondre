import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const onMouseOut = event => {
  const el = event.target;
  el.style.color = "black";
};

export const onMouseOver = event => {
  const el = event.target;
  el.style.color = "blue";
};

export default function BasicTextFields() {
  return (
    <div>
      <TextField id="standard-basic" label="Brukernavn:" />
      <TextField id="standard-basic" label="Passord:" />
    </div>
  );
}
