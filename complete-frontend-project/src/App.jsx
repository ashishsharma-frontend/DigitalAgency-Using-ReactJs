// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomeJs from "./Components/Home";
import WhatWeDoJs from "./Components/WhatWeDo";
import OurProcess from "./Components/OurProcess";
import TeamSquadJs from "./Components/TeamComponent/Team";
import WebProjectJS from "./Components/WebProject";
import TalkJs from "./Components/Talk";

function App() {
  return (
    <>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomeJs />} />
        <Route path="/whatwedo" element={<WhatWeDoJs />} />
        <Route path="/process" element={<OurProcess />} />
        <Route path="/team" element={<TeamSquadJs />} />
        <Route path="/project" element={<WebProjectJS />} />
        <Route path="/contact" element={<TalkJs />} />
      </Routes>
    </>
  );
}

export default App;
