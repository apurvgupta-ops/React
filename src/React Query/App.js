import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Homepage from "./Basic/Homepage";
import RQsuperheropage from "./Basic/RQsuperheropage";
import Superheropage from "./Basic/Superheropage";
import RQsuperherobyid from "./Basic/RQsuperherobyid";
import "../App.css";
import { ParllelQuery } from "./Basic/ParllelQuery";
import { DynamicQueries } from "./Basic/DynamicQueries";
import DependentQueries from "./Basic/DependentQueries";
import PaginatedQuery from "./Basic/PaginatedQuery";
import InfiniteQuery from "./Basic/InfiniteQuery";

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
            <li>
              <Link to="/rq-parallel-queries">Parallel Queries</Link>
            </li>
            <li>
              <Link to="/rq-paginated-query">Paginated Queries</Link>
            </li>
            <li>
              <Link to="/rq-infinite-query">Infinite Queries</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/rq-infinite-query" element={<InfiniteQuery />} />
          <Route
            exact
            path="/rq-paginated-query"
            element={<PaginatedQuery />}
          />
          <Route
            exact
            path="/rq-dependent-query"
            element={<DependentQueries email="a@example.com" />}
          />
          <Route
            exact
            path="/rq-super-hero/:heroId"
            element={<RQsuperherobyid />}
          />
          <Route
            exact
            path="/rq-dynamic-query"
            element={<DynamicQueries heroIds={[1, 3]} />}
          />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/super-heros" element={<Superheropage />} />
          <Route exact path="/rq-super-heros" element={<RQsuperheropage />} />
          <Route exact path="/rq-parallel-queries" element={<ParllelQuery />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
