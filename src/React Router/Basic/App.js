import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
      </Routes>
    </div>
  );
};

export default App;
