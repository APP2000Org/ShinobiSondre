import React from "react";
import "./App.css";
import SearchAppBar from "./Components/navbar";
import SimpleContainer from "./Components/contaier1";
import SimpleContainer2 from "./Components/container2";

function App() {
  return (
    <div>
      <SearchAppBar />
      <SimpleContainer />,
      <SimpleContainer2 />,
    </div>
  );
}

export default App;
