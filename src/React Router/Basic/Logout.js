import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Logout() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Logout;
