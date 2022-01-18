import React from "react";
import Form from "./Simple form/Form";
import Formikform from "./FormikHook(useFormik)(Managing from state)/Form";
import HandleSubmission from "./Handling submissions/Form";
import Validations from "./Validations/Validation";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Formikform /> */}
      {/* <HandleSubmission /> */}
      <Validations />
    </div>
  );
};

export default App;
