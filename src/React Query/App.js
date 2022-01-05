import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Homepage from "./Basic/Homepage";
import RQsuperheropage from "./Basic/RQsuperheropage";
import Superheropage from "./Basic/Superheropage";
import "../App.css";

const Queryclient = new QueryClient();
const App = () => {
  return (
    <BrowserRouter>
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
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/super-heros" component={Superheropage} />
            <Route exact path="/rq-super-heros" component={RQsuperheropage} />
          </Switch>
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
