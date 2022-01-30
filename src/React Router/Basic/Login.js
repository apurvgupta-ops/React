import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const location = useLocation();

  const redirect = location.state?.path || "/";
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navigate(redirect, { replace: true });
  };
  return (
    <div>
      <label>
        UserName
        <input
          type="text"
          placeHolder="Enter your Username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
