import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./React Formik/App";
import App from "./React Router/Basic/App";
import "./index.css";

ReactDOM.render(
  <>
    <div className="App">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
