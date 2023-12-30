// App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeJs from './Components/Home';
import WhatWeDoJs from './Components/WhatWeDo';
import OurProcess from './Components/OurProcess';
import TeamSquadJs from './Components/TeamComponent/Team';
import WebProjectJS from './Components/WebProject';
import TalkJs from './Components/Talk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeJs />} />
        <Route path="/whatwedo" element={<WhatWeDoJs />} />
        <Route path="/process" element={<OurProcess />} />
        <Route path="/team" element={<TeamSquadJs />} />
        <Route path="/project" element={<WebProjectJS />} />
        <Route path="/contact" element={<TalkJs />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
