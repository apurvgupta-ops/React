import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import Logout from "./Logout";
function Profile() {
  const auth = useAuth();

  return (
    <div>
      Welcome {auth.user}
      {auth.user && <Logout />}
    </div>
  );
}

export default Profile;
