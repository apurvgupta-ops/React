import React from "react";
import Form from "./Simple form/Form";
import Formikform from "./FormikHook(useFormik)(Managing from state)/Form";
import HandleSubmission from "./Handling submissions/Form";
import Validations from "./Validations/Validation";
import NewFrom from "./Formik Components(New Form)/NewForm";
import "../App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <Formikform /> */}
      {/* <HandleSubmission /> */}
      {/* <Validations /> */}
      <NewFrom />
    </div>
  );
};

export default App;
