import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
// import Aboutpage from "./Aboutpage";
import { Navbar } from "./Navbar";
import { OrderSummary } from "./OrderSummary";
import NoMatchRoute from "./NoMatchRoute";
import { Products } from "./Products";
import { Featured } from "./Featured";
import { New } from "./New";
import { Users } from "./Users";
import Login from "./Login";
import Profile from "./Profile";
import { AuthProvider } from "./auth";
import { ReqAuth } from "./ReqAuth";
const LazyAbout = React.lazy(() => import("./Aboutpage"));
const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="aboutpage"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NoMatchRoute />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} /> // indexing
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route
            path="profile"
            element={
              <ReqAuth>
                <Profile />
              </ReqAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="users/:userId" element={<Users />} /> //Dyanmic Routes
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
