import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

//Validation using Yup library**********
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const Validations = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <h1>Simple Form</h1>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}

            //we can use getfieldsprops method instead of above 3 lines
            // {...formik.getFieldProps("name")}

            //if we use field component from formik we dont want to use getfieldprops method
          />
          {/* {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null} */}
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <Field type="email" id="email" name="email" />

          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />

          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Validations;
