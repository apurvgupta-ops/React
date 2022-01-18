import React from "react";
import Form from "./Simple form/Form";
import Formikform from "./FormikHook(useFormik)/Form";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Form /> */}
      <Formikform />
    </div>
  );
};

export default App;
