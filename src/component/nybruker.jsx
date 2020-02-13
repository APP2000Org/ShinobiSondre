import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextFields() {
  return (
    <div>
      <TextField id="standard-basic" label="Epost:" />
      <TextField id="standard-basic" label="Brukernavn:" />
      <TextField id="standard-basic" label="Passord:" />
      <TextField id="standard-basic" label="Fornavn:" />
      <TextField id="standard-basic" label="Etternavn:" />
      <TextField id="standard-basic" label="Bynavn:" />
      <TextField id="standard-basic" label="Fødselsdato:" />
    </div>
  );
}
