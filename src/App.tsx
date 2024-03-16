import React from "react";
import "./App.css";
import Topbar from "./Topbar/Topbar";
import Body from "./Body/Body";
import GetStarted from "./Body/GetStarted";
import Navbar from "./NavBar/NavBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <GetStarted />
    </div>
  );
};

export default App;
