import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextFields() {
  return (
    <div>
      <TextField id="standard-basic" label="Epost:" />
      <TextField id="standard-basic" label="Brukernavn:" />
      <TextField id="standard-basic" label="Passord:" />
      <TextField id="standard-basic" label="Bekreft passord:" />
    </div>
  );
}
