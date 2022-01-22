import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",

  //NESTED OBJECTS
  social: {
    facebook: "",
    instagram: "",
  },
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
      <Form>
        <h1>Simple Form</h1>

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(error) => <div className="error">{error}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div>
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        {/* //Render Props Method using with Formik */}
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address">
            {(props) => {
              const { field, form, meta } = props;
              {
                /* console.log("Render props", props); */
              }
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <h6>{meta.error}</h6> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <Field type="text" id="instagram" name="social.instagram" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Validations;
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
// value={formik.values.name}

//we can use getfieldsprops method instead of above 3 lines
// {...formik.getFieldProps("name")}

//if we use field component from formik we dont want to use getfieldprops method
// />
// {
/* {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null} */
// }
