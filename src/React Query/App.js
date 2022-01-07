import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Homepage from "./Basic/Homepage";
import RQsuperheropage from "./Basic/RQsuperheropage";
import Superheropage from "./Basic/Superheropage";
import RQsuperhero from "./Basic/RQsuperhero";
import "../App.css";

const Queryclient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={Queryclient}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heros">SuperHero</Link>
            </li>
            <li>
              <Link to="/rq-super-heros">RQ SuperHero</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            exact
            path="/rq-super-hero/:heroId"
            element={<RQsuperhero />}
          />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/super-heros" element={<Superheropage />} />
          <Route exact path="/rq-super-heros" element={<RQsuperheropage />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
