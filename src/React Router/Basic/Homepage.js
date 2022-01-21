import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Homepage</div>
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </>
  );
};

export default Homepage;
