import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import { Navbar } from "./Navbar";
import { OrderSummary } from "./OrderSummary";
import NoMatchRoute from "./NoMatchRoute";
import { Products } from "./Products";
import { Featured } from "./Featured";
import { New } from "./New";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="aboutpage" element={<Aboutpage />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatchRoute />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
