import React from "react";
import "./App.css";
import SearchAppBar from "./Components/Header/navbar";
import Gmaps_Container from "./Components/Gmaps/Gmap_Container";
import Main_Container from "./Components/Main/Main_Container";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Gmaps_Container />
      <Main_Container></Main_Container>
    </div>
  );
}

export default App;
