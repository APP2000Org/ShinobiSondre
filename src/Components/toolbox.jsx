import React from "react";
import TextField from "@material-ui/core/TextField";

export const onMouseOut = event => {
  const el = event.target;
  el.style.color = "white";
};

export const onMouseOver = event => {
  const el = event.target;
  el.style.color = "grey";
};

export default function BasicTextFields() {
  return (
    <div>
      <TextField id="standard-basic" label="Brukernavn:" />
      <TextField id="standard-basic" label="Passord:" />
    </div>
  );
}
